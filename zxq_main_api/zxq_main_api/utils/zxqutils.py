import datetime


def get_date_time():
    now = datetime.datetime.now()
    year = now.year
    month = now.month
    day = now.day
    hour = now.hour
    minute = now.minute
    second = now.second
    microsecond = now.microsecond
    return '{}-{}-{}-{}-{}-{}-{}'.format(year, month, day, hour, minute, second, microsecond)
