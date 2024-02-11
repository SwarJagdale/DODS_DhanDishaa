import streamlit as st
import matplotlib.pyplot as plt
import numpy as np
import seaborn as sns
st.set_option('deprecation.showPyplotGlobalUse', False)
# st.markdown(
#     """
#     <style>
#     .reportview-container .main .block-container{
#         max-width: 2px;
#         padding-top: 2rem;
#         padding-right: 2rem;
#         padding-left: 2rem;
#         padding-bottom: 2rem;
#     }
#     </style>
#     """,
#     unsafe_allow_html=True
# )

def calculate_sip(investment, return_rate, period):
    months = period * 12
    invested_amount = investment * months
    monthly_rate = return_rate / 12 / 100
    # Future value of a series formula used for SIP calculation
    future_value = investment * (((1 + monthly_rate)**months - 1) / monthly_rate) * (1 + monthly_rate)
    est_returns = future_value - invested_amount
    return invested_amount, est_returns, future_value

def calculate_lumpsum(investment, return_rate, period):
    years = period
    invested_amount = investment
    annual_rate = return_rate / 100
    # Compound interest formula used for lumpsum calculation
    future_value = investment * ((1 + annual_rate) ** years)
    est_returns = future_value - invested_amount
    return invested_amount, est_returns, future_value

# Streamlit interface
st.title('Your Investments Calculator 📈📊')

investment_type = st.radio("Select the investment type:", ('SIP', 'Lumpsum'))

with st.form("my_form"):
    if investment_type == 'SIP':
        investment = st.slider('Monthly investment', 1000, 50000, 25000)
    else:
        investment = st.slider('Lumpsum investment', 10000, 1000000, 500000)
        
    return_rate = st.slider('Expected return rate (p.a)', 1, 15, 12)
    period = st.slider('Time period (years)', 1, 30, 10)
    
    submitted = st.form_submit_button("Calculate")

    if submitted:
        if investment_type == 'SIP':
            invested_amount, est_returns, total_value = calculate_sip(investment, return_rate, period)
        else:
            invested_amount, est_returns, total_value = calculate_lumpsum(investment, return_rate, period)
            
        st.success(f'Invested amount: ₹{invested_amount:,.2f}')
        st.success(f'Est. returns: ₹{est_returns:,.2f}')
        st.success(f'Total value: ₹{total_value:,.2f}')

        time_periods = np.arange(1, period + 1)
        future_values = []
        invested_money = []
        for t in time_periods:
            if investment_type == 'SIP':
                _, _, future_value = calculate_sip(investment, return_rate, t)
                invested_money.append(investment * t * 12)
            else:
                _, _, future_value = calculate_lumpsum(investment, return_rate, t)
                invested_money.append(investment)
            future_values.append(future_value)

        plt.figure(figsize=(12, 6))

        # Line plot
        sns.lineplot(x=time_periods, y=future_values, marker='o', label='Current Value')
        sns.lineplot(x=time_periods, y=invested_money, marker='o', label='Invested Amount')
        plt.xlabel('Time Period (years)')
        plt.ylabel('Amount (₹)')
        plt.title('Investment Growth Over Time')
        plt.legend()
        st.pyplot()

        # Pie plot
        labels = ['Invested Amount', 'Interest Generated']
        amounts = [invested_amount, est_returns]
        plt.figure(figsize=(8, 8))
        plt.pie(amounts, labels=labels, autopct='%1.1f%%', startangle=140)
        plt.title('Invested Amount vs Interest Generated')
        st.pyplot()
