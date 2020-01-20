import datetime
def find_date_range(days, forward = None):
	forward = False
	if forward:
		date = '{:%Y-%m-%d}'.format(datetime.datetime.now() + datetime.timedelta(days))
	else:
		date = '{:%Y-%m-%d}'.format(datetime.datetime.now() - datetime.timedelta(days))
	return date

find_date_range(370)
