"""Functions used in preparing Guido's gorgeous lasagna.

Learn about Guido, the creator of the Python language:
https://en.wikipedia.org/wiki/Guido_van_Rossum

This is a module docstring, used to describe the functionality
of a module and its functions and/or classes.
"""



EXPECTED_BAKE_TIME = 40
TIME_PER_LAYER = 2

def bake_time_remaining(time_in_oven):
    
    """Calculate the bake time remaining.
    
    Parameters:
        elapsed_bake_time (int): The baking time already elapsed.

    Returns:
        int: The remaining bake time (in minutes) derived from 'EXPECTED_BAKE_TIME'.

    Function that takes the actual minutes the lasagna has been in the oven as
    an argument and returns how many minutes the lasagna still needs to bake
    based on the `EXPECTED_BAKE_TIME`.
    """
    print(bake_time_remaining.__doc__)
    return EXPECTED_BAKE_TIME - time_in_oven
    



def preparation_time_in_minutes(number_of_layers):
    
    """Calculate the preparation time.
    
    Parameters:
        number_of_layers (int): The number of layers the lasagna has.

    Returns:
        int: The preparation time (in minutes) derived from 'TIME_PER_LAYER'.

    Function that takes the the number of layers as an argument and returns how long the preparation takes based on the `TIME_PER_LAYER`.
    """
    print(preparation_time_in_minutes.__doc__)
    return number_of_layers * TIME_PER_LAYER

def elapsed_time_in_minutes(number_of_layers, elapsed_bake_time):
    
    """Calculate the elapsed cooking time.
    
    Parameters:
        elapsed_bake_time (int): The baking time already elapsed.

    Returns:
        int: The time the whole process took up to this point.

    Function that adds the preparation time to the already elapsed baking time.
    """
    print(elapsed_time_in_minutes.__doc__)
    return preparation_time_in_minutes(number_of_layers) + elapsed_bake_time