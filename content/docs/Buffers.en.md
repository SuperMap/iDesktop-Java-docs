---
title: Buffer zone
---

　　Creates buffers around specified geometrical objects like points, lines, regions according to a given distances. To learn more about the analysis Buffer Zone, see [Theory of Buffer Analysis](../../docs/DataAnalyst/BufferTheory.html).

　　The feature Buffer Zone usually applies to GIS spatial analysis combining with overlay analysis to resolve problems in reality. The Buffer Zone is widely used in various fields like: agriculture, city planning, ecological protection, flood prevention, fighting disaster, military field, geology, environment and so on. For example, when to broaden roads, using the feature Buffer Zone to create buffers for road data and then covering buffers with building data thereby finding out which buildings have to be dismantled. 

##### 　　Function entrances

　　Two entrances are provided:

- In the "Online" tab and "Analysis" group, select "Buffer Zone Analysis".
- In the "Model Builder" tab click "New" to open the "Toolbox" panel then click "Buffer Zone Analysis" under the "Online Analysis", or drag it into the "Model Builder" window.

##### 　　Parameters

　　All parameters of the tool Buffer Zone can be classified three classes: iServer, source data, and analysis parameters, for the first two classes of parameters, see [Data Input](DataInputType.html). Following contents detail all parameters in the third class.

1. **Analysis Bounds**: specify which points to be processed, the default is all points. The parameter is not required. If you want to set the parameter, you could enter a range directly like -74.050,40.650,-73.850,40.850 with the order is left, bottom, right, top separated by commas or paste a rage.
2. **Buffer Distance**: If no fields are set for the buffer distance, the value of this parameter will be used as the buffer distance (default is 10) otherwise, the setting is invalid.
3. **Buffer Distance Field**: Specify a field and then using the field value of each point for distance.
4. **Buffer Distance Unit**: You are allowed to choose one from m (by default), km, Yards, ft, mi (listed in the drop-down list).
5. **Dissolve Field**: Optional. Used to dissolve the result buffer regions based on the specified field. Setting a non-system field is allowed.
6. After all required parameters are set, you can perform the analysis, and the result will be opened automatically and its path will be output in the Output window.



### ![](img/seealso.png) Related topics

　　![](img/smalltitle.png) [Environment configuration](BigDataAnalysisEnvironmentConfiguration.html)

　　![](img/smalltitle.png) [Data Preparation](DataPreparation.html)

