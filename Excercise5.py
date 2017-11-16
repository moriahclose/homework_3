movie = int(input('Enter the number of movie rentals = '));
members = int(input('Enter the number of members referrals = '));
thesum = min(max(movie + members, 0),75)
print("The discount is equal to: ".format(thesum))
