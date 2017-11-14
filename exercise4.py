# exercise4.py
# Moriah Tolliver and Gabriel Say

balance = float(input("Initial balance: "));
monthlyInterestRate = float(input("Annual interest rate in percent: ")) / 1200;

for balanceNum in range (1 , 4):
     balance = balance + ( balance * monthlyInterestRate )
     print("Balance after month" , balanceNum , ":" , round(balance,2))
