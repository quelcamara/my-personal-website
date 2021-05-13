---
title: 3 mighty libraries for a Data Science beginner to become friends with (part 1)
subtitle: >-
  I will tell you the secret for this friendship to work, and why you should stick with them forever.
excerpt: >-
  It is very common to get confused about what we should learn at the very beginning of our studies. But no need to start yelling at a cat! I am sure that after these posts you will be gifted with plenty of working for the next few days. On this first section out of three posts, we'll discover the strength of Pandas.
date: 2021-04-23
thumb_img_path: images/post-2/cover.jpg
thumb_img_alt: migthy libraries
content_img_path: images/post-2/cover.jpg
seo:
  title: 3 mighty libraries for a Data Science beginner to become friends with (part 1)

  description: I will tell you the secret for this friendship to work, and why you should stick with them forever.
  extra:
    - name: og:type
      value: article
      keyName: property
    - name: og:title
      value: 3 mighty libraries for a Data Science beginner to become friends with (part 1)
    
      keyName: property
    - name: og:description
      value: I will tell you the secret for this friendship to work, and why you should stick with them forever.
      keyName: property
    - name: og:image
      value: images/post-2/cover.jpg
      keyName: property
      relativeUrl: true
    - name: twitter:card
      value: summary_large_image
    - name: twitter:title
      value: 3 mighty libraries for a Data Science beginner to become friends with (part 1)
    
    - name: twitter:description
      value: I will tell you the secret for this friendship to work, and why you should stick with them forever.
    - name: twitter:image
      value: images/post-2/cover.jpg
      relativeUrl: true
layout: post
---

I understand you.

When we start something new, we use to get so excited that we begin to google search a lot of random stuff about that thing. And it becomes almost inevitable not to get lost on the endless sea of information available on the internet. But by putting some effort, we are able to filter what is important to know based on our current level.

On this set of posts, you will be given precious information about three **python** libraries that you should definitely look up:

- Pandas
- NumPy
- Matplotlib

You probably already heard a thing or two about any of these. But if you didn't pay attention before - because maybe you thought they were not worth it - this is your chance to redeem yourself.

To better illustrate the next topics, consider the following dataset for demonstration purposes:

&nbsp; | PurchaseDate |   Region  |   State   | Seller |  Item   | Units | UnitPrice  
:-----:| :-----------:| :--------:| :--------:| :-----:| :------:| :----:| :-------:
   0   | 10-Jun-2020  | Northeast |   Bahia   | Tobias | Stove   |  62   |  400.99
   1   | 11-Jun-2020  | Southeast | São Paulo | Nadia  | Fridge  |  29   |  100.99
   2   |  3-Aug-2020  | Northeast |   Ceará   | Carlos | Stove   |  55   | 1200.49
   3   | 22-Aug-2020  | Northeast |   Bahia   | Pedro  | Fridge  |  81   | 1900.99
   4   | 26-Aug-2020  |  Midwest  |   Goiás   | Tania  | Blender |  42   | 2300.95
   5   | 10-Sep-2020  | Northeast |  Sergipe  | Tobias | Carpet  |  35   |  400.99
   6   | 12-Sep-2020  |   North   |   Pará    | Carlos | Carpet  |   3   | 2750.00
   7   |  7-Oct-2020  | Northeast |  Sergipe  | Nadia  | Blender |   2   | 1250.00
   8   | 15-Oct-2020  |   North   | Amazonas  | Pedro  | Stove   |   7   | 1000.29
   9   | 27-Nov-2020  | Southeast | São Paulo | Nadia  | Fridge  |  16   | 1500.99
  10   | 13-Dec-2020  |   South   |  Paraná   | Tania  | Blender |  76   | 1450.99

***file:*** order_data.csv

On this first post, we'll start with **Pandas**. And if you want to check on some specific functionality, I will leave you the table below so you can also go straight to the point.

|    Load and Transform     |     Visualize     |           Locate           |       Summarize       |  
:-------------------------: | :---------------: | :------------------------: | :-------------------: | 
[read_csv](#read-csv)       | [head](#head)     | [loc](#loc)                | [describe](#describe) |
[read_excel](#read-excel)   | [tail](#tail)     | [iloc](#iloc)              | [info](#info)         |
[sort_values](#sort-vals)   | [shape](#shape)   | [duplicated](#duplic)      | [sum](#sum)           |
[set_index](#set-index)     | [index](#index)   | [query](#query)            | [count](#count)       |
[reset_index](#reset-idx)   | [columns](#cols)  | [df['col']](#df-col1)      | [min](#min)           |
[drop](#drop)               | [dtypes](#dtypes) | [df.your_col](#df-col2)    | [max](#max)           |
[copy](#copy)               | [isnull](#isnull) |          ---               | [mean](#mean)         |
---                         | [values](#values) |          ---               | [median](#median)     |
---                         |        ---        |          ---               | [corr](#corr)         |


## Pandas
![Panda](../../images/post-2/01-panda.jpg)
***image*** by [Eric Baccega](https://onebigphoto.com/giant-panda-sleeping-on-a-tree-china/)

Pandas is a very powerful python library widely used by data scientists and/or analysts for both manipulating and analysing data. It also works well with many other python modules, and its main advantage is having  an intuitive and practical usability without compromising its functionality.

For convenience, pandas use to be loaded into the project with the allias `pd`, as shown below:

~~~python
import pandas as pd

~~~

It is useful so we can just use this short allias instead of typing the whole package name every time we want to use a pandas function. This library also allows us to create two type of structures that make the manipulating easier: **Series** and **Dataframes**.

#### Series
According to pandas official [documentation](https://pandas.pydata.org/docs/index.html), a series is a one-dimensional ndarray (an array that belongs to the NumPy class `ndarray`) with axis labels.

*Omg, this...*

Better saying, a pandas series is nothing but an unidimensional array (having a unique dimension) which can store any sort of data with labels or indexes as the axis. In short, it is like a column of a dataframe. Let's see how to create a series in pandas and how to identify its structure. The following code can be replicated in your jupyter notebook:

~~~python
# imports
In [1]: import pandas as pd

# creates a series to store people names
In [2]: names = pd.Series(['Carlos', 'Sara', 'Louise', 'James'])

In [3]: names
Out[3]: 0   Carlos
        1     Sara
        2   Louise
        3    James
        dtype: object

~~~

Note that, as indexation in python begins with 0, the index range of the series created goes from 0 to `n-1`, where *n* is the number of elements on your series. This is a very important thing to remember, and which might cause a lot of malfunctioning on your codes if you mess that up.

We can also see that, as I haven't specified any index range for my series, pandas automaticatly insert the standard indexation. However, if I want a different label for my axis, I can specify that when creating the object. See how it looks:

~~~python
# creates a series to store animals species
In [2]: animals = pd.Series(['Dog', 'Elephant', 'Fox', 'Eagle'],
                            index=['A', 'B', 'C', 'D'])

In [3]: animals
Out[3]: A        Dog
        B   Elephant
        C        Fox
        D      Eagle
        dtype: object

~~~

These are, in fact, very simple examples. But they might help you having an ideia of what a series look like.

#### Dataframes
Differently from a series, a pandas dataframe is a two-dimensional tabular structure where data is labeled by its own combination of column and row. This structure is size-mutable and potentially heterogeneous. That is, we can easily create a dataframe with two columns and two rows, and then add new columns and rows for this same object. And we can store different types of data on the same dataframe, which can be very convinient in many situations.

Let's see how it works on the jupyter notebook:

~~~python
# imports
In [1]: import pandas as pd

# creates a dataframe to store people names, ages, and heights
In [2]: names = pd.DataFrame([['Carlos', 27, 1.78], ['Sara', 12, 1.35],
                              ['Louise', 35, 1.62], ['James', 18, 1.87]],
                              columns=['name', 'age', 'height'],
                              index=['i', 'ii','iii', 'iv'])

In [3]: names
Out[3]:      name   age   height
        i  Carlos    27     1.78
       ii    Sara    12     1.35
      iii  Louise    35     1.62
       iv   James    18     1.87
~~~

Could you notice how they differ? Now we have a table storing a set of information that we can either access by the index - returning all the information in a the row - or by the combination of index and columns - returning a single desired value.

And if we just want to go on regular indexing, we only need to remove the `index` attribute from the function.

See the official [documentation](https://pandas.pydata.org/docs/reference/api/pandas.DataFrame.html) for more information.

Just so to remind you, all the operations from now on will take into consideration the dataset we defiined on the very beginning of this post. Also, see that you will face many abbreviations and acronyms on your way through the data science world. I will provide you a cheatsheet on later posts. 

Now, let us finally see what pandas can bring us!

#### Loading data
Pandas has many functions to load data into your project. You can mine data from a csv - a text file - or an excel spreadsheet, for instance. But it is also possible to get information from SQL and HTML tables, SQL query, JSON strings, Google BigQuery, Stata .dta files, and so on. See [here](https://pandas.pydata.org/docs/reference/io.html) all the options pandas offers.

Here are two frequently used functions:

<a id="read-csv"></a>
###### pd.read_csv
For comma-separated text files.

~~~python
# locate and indicate your file path
df = pd.read_csv('C:\...\order_data.csv')
~~~

<a id="read-excel"></a>
###### pd.read_excel
For excel files.

~~~python
# locate and indicate your file path
# you can also indicate the sheet name if there are more than one
df = pd.read_csv('C:\...\your_file_here.xlsx',
                      sheet_name='sheet_name_here')
~~~

#### Transforming data
Sometimes we only need to perform some basic transformations on our DataFrame and that's where this functions come in handy.

<a id="sort-vals"></a>
###### df.sort_values
Sort DataFrame by the values of chosen column or columns. It is possible to sort twice if you pass more than one column as parameter. You can also choose the direction of your sorting by assigning `ascending` as `True` or `False`.

See the [documentation](#https://pandas.pydata.org/docs/reference/api/pandas.DataFrame.sort_values.html).

~~~python
# sorts in ascending order by the column 'Seller'
df.sort_values(by='Seller', ascending=True)
~~~

![Image](../../../../images/post-2/01.png)

<a id="set-index"></a>
###### df.set_index
Set an existing DataFrame column as the index. You can either use it to replace the original index or to expand it.

See the [documentation](https://pandas.pydata.org/docs/reference/api/pandas.DataFrame.set_index.html).

~~~python
# using append=True to expand the index
# column 'Seller' is picked
df.set_index('Seller', append=True)
~~~

![Image](../../../../images/post-2/02.png)

<a id="reset-idx"></a>
###### df.reset_index
Reset the index of a DataFrame, using the default one instead. Default indexation in python begin with 0. You can either drop the current index or insert it as a column into the DataFrame. 

See the [documentation](https://pandas.pydata.org/docs/reference/api/pandas.DataFrame.reset_index.html)

~~~python
# drop=False keeps the current index as a column
df.reset_index(drop=False)
~~~

![Image](../../../../images/post-2/03.png)

<a id="drop"></a>
###### df.drop
Remove rows or columns by specifying row index or column name to drop.<br/>
For `axis=0`, the function searchs through the DataFrame indexes. <br/>
For `axis=1`, it searchs through its columns.

See the [documentation](https://pandas.pydata.org/pandas-docs/stable/reference/api/pandas.DataFrame.drop.html)

~~~python
# removes PurchaseDate from the columns
df.drop('PurchaseDate', axis=1)
~~~

![Image](../../../../images/post-2/04.png)

<a id="copy"></a>
###### df.copy
Make a copy of the object's indices and data. If you set `deep=True`, none of the modifications on the original object will reflect on the copy. However, setting `deep=False` makes a shadow copy, and any modification on either the original or the shadow object will reflect on each other.

See the [documentation](https://pandas.pydata.org/docs/reference/api/pandas.DataFrame.copy.html)

~~~python
# creates a copy df
# deep=True is the default parameter
df_2 = df.copy()
print(df_2)
~~~

![Image](../../../../images/post-2/05.png)

#### Visualizing data

<a id="head"></a>
###### df.head
Return the **first** *n* rows. If `n` is not specified, it returns the first 5 rows as default. It is aso possible to return everything except the last *n* rows by passing a negative parameter for `n`.

See the [documentation](https://pandas.pydata.org/docs/reference/api/pandas.DataFrame.head.html)

~~~python
# returns the first 3 rows
df.head(3)
~~~

![Image](../../../../images/post-2/06.png)

<a id="tail"></a>
###### df.tail
Return the **last** *n* rows. If `n` is not specified, it returns the last 5 rows as default. It is aso possible to return everything except the first *n* rows by passing a negative parameter for `n`.

See the [documentation](https://pandas.pydata.org/docs/reference/api/pandas.DataFrame.tail.html)

~~~python
# returns everything except the first 6 rows
df.tail(-6)
~~~

![Image](../../../../images/post-2/07.png)

<a id="shape"></a>
###### df.shape
Return a tuple representing the dimensionality of the DataFrame. The first element represents the total number of rows, and the second element is the total number of columns.

See the [documentation](https://pandas.pydata.org/docs/reference/api/pandas.DataFrame.shape.html)

~~~python
# returns the DataFrame dimensionality
df.shape
~~~

![Image](../../../../images/post-2/08.png)

<a id="index"></a>
###### df.index
Return the index (row labels) of the DataFrame. If the object index is the default indexation, it will return a RangeIndex object with `start`, `stop`, and `step` parameters.

See the [documentation](https://pandas.pydata.org/docs/reference/api/pandas.DataFrame.index.html)

~~~python
# returns rows labels
df.index
~~~

![Image](../../../../images/post-2/09.png)

<a id="cols"></a>
###### df.columns
Return a list of the columns labels of the DataFrame.

See the [documentation](https://pandas.pydata.org/docs/reference/api/pandas.DataFrame.columns.html)

~~~python
# returns columns labels
df.columns
~~~

![Image](../../../../images/post-2/10.png)

<a id="dtypes"></a>
###### df.dtypes
It returns a Series with the data type of each column. If there are columns with mixed types, they'll be stored with the *object* `dtype`.

See the [documentation](https://pandas.pydata.org/pandas-docs/stable/reference/api/pandas.DataFrame.dtypes.html)

~~~python
# returns the data type of each column
df.dtypes
~~~

![Image](../../../../images/post-2/11.png)

<a id="isnull"></a>
###### df.isnull
Used to detect missing values. As a reuslt, it returns booleans shaped as the object passed as parameter. 

See the [documentation](https://pandas.pydata.org/pandas-docs/stable/reference/api/pandas.isnull.html)

~~~python
# detects missing values and returns as booleans
df.isnull()
~~~

![Image](../../../../images/post-2/12.png)

<a id="values"></a>
###### df.values
Return an array-like representation of the DataFrame. This property takes all the values of the object and returns each row as a list of values stored into a Numpy array.

See the [documentation](https://pandas.pydata.org/pandas-docs/stable/reference/api/pandas.DataFrame.values.html)

~~~python
# returns the df values as lists into a numpy array
df.values
~~~

![Image](../../../../images/post-2/13.png)

#### Locating data

<a id="loc"></a>
###### df.loc
Access a group of rows and colums by its labels. You can use this property to either access a unique item, an entire row, or any sort of slicing of rows throughout a column or a set of columns passed as input.

See the [documentation](https://pandas.pydata.org/docs/reference/api/pandas.DataFrame.loc.html) for all the input possibilities.

~~~python
# access all rows stopping on label 3 of the columns Seller and Item
df.loc[:3, ['Seller', 'Item']]
~~~

![Image](../../../../images/post-2/14.png)

<a id="iloc"></a>
###### df.iloc
It is an integer position based to locate and access itens of a DataFrame. It returns all the information about a specific row.

See the [documentation](https://pandas.pydata.org/docs/reference/api/pandas.DataFrame.iloc.html)

~~~python
# selects the indexed row 2 of the DataFrame
df.iloc[2]
~~~

![Image](../../../../images/post-2/15.png)

<a id="duplic"></a>
###### df.duplicated
Return a boolean Serie pointing the existence of duplicated rows. If no subset of columns is passed, this function will look for duplicated itens considering they are only equal if the entire rows match. You can also set the parameter `keep` as `{'first', 'last', False}` to indicate wheter you want to mark all duplicates except the *first* or *last* one as True, or if you'd like to mark all of them as True.

See the [documentation](https://pandas.pydata.org/docs/reference/api/pandas.DataFrame.duplicated.html)

~~~python
# check if there are duplicated rows when considering Seller and Item only
df.duplicated(['Seller', 'Item'])
~~~

![Image](../../../../images/post-2/16.png)

<a id="query"></a>
###### df.query
Query the columns of a DataFrame and return where the passed expression is True.

See the [documentation](https://pandas.pydata.org/docs/reference/api/pandas.DataFrame.query.html)

~~~python
# queries all the values and returns where Seller is Carlos 
df.query("Seller == 'Carlos'")
~~~

![Image](../../../../images/post-2/17.png)

<a id="df-col1"></a>
###### df['col']
This is on of the most common and simple ways to locate all the values on a entire column of a DataFrame. All you have to do is passing the columns names into the braces.

~~~python
# returns all the values into the column UnitPrice
df['UnitPrice']
~~~

![Image](../../../../images/post-2/18.png)

<a id="df-col2"></a>
###### df.your_col
For a similar result as the previous locating method, you can also call the columns name as it is an attribute of the DataFrame.

~~~python
# returns all the values into the column UnitPrice
df.UnitPrice
~~~

![Image](../../../../images/post-2/18.png)

#### Summarizing data

<a id="describe"></a>
###### df.describe
Generate a decriptive statistics table. It includes measures such as mean, median, range, standard deviation, and more.

See the [documentation](https://pandas.pydata.org/pandas-docs/stable/reference/api/pandas.DataFrame.describe.html)

~~~python
# descriptive statistics with costumized percentiles
df.describe(percentiles=[0.2, 0.5, 0.8])
~~~

![Image](../../../../images/post-2/19.png)

<a id="info"></a>
###### df.info
Print a summary of the DataFrame. This summary includes dtypes, columns, and non-null values.

See the [documentation](https://pandas.pydata.org/docs/reference/api/pandas.DataFrame.info.html)

~~~python
# prints summary info
df.info()
~~~

![Image](../../../../images/post-2/20.png)

<a id="sum"></a>
###### df.sum
Return the sum of the values. You can access a column first to have the results for that specific column.

See the [documentation](https://pandas.pydata.org/docs/reference/api/pandas.DataFrame.sum.html)

~~~python
# returns the sum for the column Units
df.Units.sum()
~~~

![Image](../../../../images/post-2/21.png)

<a id="count"></a>
###### df.count
Count the cells with non-NA values for each row or column. NA values here are considered to be any *None*, *NaN*, *NaT* and *numpy.inf* values.

See the [documentation](https://pandas.pydata.org/pandas-docs/stable/reference/api/pandas.DataFrame.count.html)

~~~python
# counts non-null cells for each column
df.count()
~~~

![Image](../../../../images/post-2/22.png)

<a id="min"></a>
###### df.min
Return the minimum of the values over the requested axis. You can either request for the minimum value of some row by passing `axis=0` or pass `axis=1` for the minimum over a column. 

See the [documentation](https://pandas.pydata.org/pandas-docs/stable/reference/api/pandas.DataFrame.min.html)

~~~python
# minimum values over the columns
df.min()
~~~

![Image](../../../../images/post-2/23.png)

<a id="max"></a>
###### df.max
Return the maximum of the values over the requested axis.

See the [documentation](https://pandas.pydata.org/docs/reference/api/pandas.DataFrame.max.html)

~~~python
# maximum value over the column UnitPrice
df.UnitPrice.max()
~~~

![Image](../../../../images/post-2/24.png)

<a id="mean"></a>
###### df.mean
Return the mean of the values over the requested axis.

See the [documentation](https://pandas.pydata.org/pandas-docs/stable/reference/api/pandas.DataFrame.mean.html)

~~~python
# mean value over the column UnitPrice
df.UnitPrice.mean()
~~~

![Image](../../../../images/post-2/25.png)

<a id="median"></a>
###### df.median
Return the median of the values over the requested axis.

See the [documentation](https://pandas.pydata.org/pandas-docs/stable/reference/api/pandas.DataFrame.mean.html)

~~~python
# median value over the column UnitPrice 
df.UnitPrice.median()
~~~

![Image](../../../../images/post-2/26.png)

<a id="corr"></a>
###### df.corr
Compute pairwise correlations of the DataFrame columns. It's very usefull to understand the correlation between two variables at a glance. A positive correlations indicates that the two variables varies on the same direction, while a negative correlation indicates that the two variables varies on opposite direction. On the other hand, a correlation of 0 indicates no real relationship between the variables.

See the [documentation](https://pandas.pydata.org/docs/reference/api/pandas.DataFrame.corr.html)

~~~python
# chacking for existing correlation between numeric variables
df.corr()
~~~

![Image](../../../../images/post-2/27.png)

## Summary
We covered up many useful functions of the Pandas python package. These are just a lightly demonstration on how this package can be used when working with data. For the intent of this post, the chosen example were pretty simple; but when we are working with large sets of data, or creating machine learning models, they are undoubtedly life savers.

Don't feel confortable with these simple examples, see the documentation to have a better understanding on everything you are able to do with them, and try if for youself on your own dataset. You'll see how easier it will become once you give it a try and compare the results by yourself!

---
###### Reference Links:

[www.codingame.com](https://www.codingame.com/playgrounds/52723/programacao-python-parte-3---prof--marco-vaz/pacote-pandas-dataframe#:~:text=Uma%20S%C3%A9rie%20Pandas%3A%20um%20array,uma%20coluna%20de%20um%20DataFrame)<br/>
[www.pandas.pydata.org](https://pandas.pydata.org/docs/index.html)