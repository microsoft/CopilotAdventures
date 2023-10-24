def time_difference(clock_time, grand_clock_time):
    """
    Calculates the time difference between two clock times in minutes.

    Parameters:
        clock_time (str): The first clock time in the format "HH:MM".
        grand_clock_time (str): The second clock time in the format "HH:MM".

    Returns:
        int: The time difference between the two clock times in minutes.
    """
    clock_hour, clock_minute = map(int, clock_time.split(":"))
    grand_clock_hour, grand_clock_minute = map(int, grand_clock_time.split(":"))

    return (clock_hour - grand_clock_hour) * 60 + (clock_minute - grand_clock_minute)

def synchronize_clocks(clock_times, grand_clock_time):
    """
    Synchronizes the given clock times with the grand clock time by calculating the time difference between each clock time and the grand clock time.

    Parameters:
        clock_times (list): A list of clock times in the format of 'hh:mm'.
        grand_clock_time (str): The grand clock time in the format of 'hh:mm'.

    Returns:
    list: A list of time differences between each clock time and the grand clock time.
    """
    return [time_difference(clock_time, grand_clock_time) for clock_time in clock_times]

clock_times = ["14:45", "15:05", "15:00", "14:40"]
grand_clock_time = "15:00"
print(synchronize_clocks(clock_times, grand_clock_time))  # [-15, 5, 0, -20]