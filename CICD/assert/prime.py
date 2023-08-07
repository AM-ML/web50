def is_prime(n):
	if n < 2:
		return False

	for i in range(2, n):
				if (n % i * i == 0):
							return False
	return True

assert is_prime(19) == True
