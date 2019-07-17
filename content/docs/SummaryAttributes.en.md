---
title: Summarize Attributes
---

　　Summarizes field values of the specified field of the input dataset as a certain statistical method like maximum, minimum, average and so on.

　　In this analysis, you are required to specify a group field, an attribute field and a statistical mode. For example, in the following tables, the number of the field value Queens is 5 which is obtained by grouping the field borough, of which, the minimum LocationID value is 2


　　![](img/SummaryAttributes.png)

##### 　　Functional Entry

　　There are two functional entries.

- In the "Online" tab and "Analysis" group, select "Summarize Attributes Statistics".
- In the "Model Builder" tab click "New" to open the "Toolbox" panel then click "Summarize Attributes Statistics" under the "Online Analysis", or drag it into the "Model Builder" window. Double click the function node to open the "Parameter Settings" panel.

##### 　　Parameters

　　All parameters of the tool Summarize Attributes Statistics can be divided into three classes: iServer, source data, and analysis parameters, for the first two classes of parameters, see [Data Input](DataInputType.html). Following contents detail all parameters in the third class.

1. **Group Field**: Optional. You can set multiple grouping fields separated by commas. The program will summarize values of the specified fields of all objects.
2. **Attribute Field**: Optional. Specify a field which is a numerical non-system field to participate in the statistical operation.
3. **Statistic Mode**: Optional. Specify which operation will be used to calculate statistics for the specified fields. Served operations include: max, min, average, sum, variance, stdDeviation (that is standard deviation).
4. The analysis result is an attribute table, and the result path will be output in the Output Window.

