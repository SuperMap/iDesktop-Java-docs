title: Density Analysis
---

　　There are two kinds of Density analysis supported by big data distribution analysis service: Simple Density Analysis and kernel density analysis.

- **Simple density analysis**: Used to calculate magnitude-per-unit area within a specified neighborhood around each point. Calculation method is point measure value is divided by a specified neighborhood area, where the neighborhood is overlay, the density value also is added, density of every output raster is the sum of all neighborhood density value overlaying in grid. The unit of result raster value is reciprocal of the original dataset square, such as: if original dataset unit is meter, the unit of result dataset will be per square meter. 
- **Kernel density analysis**: Used to calculate unit density of point or line features measure value within a specified range. It can visually reflect the distribution of discrete measurements in continuous surfaces. It can be used to: calculate population density, calculate building density, get crime situation report, monitor population density in tourist area, analyze operation situation of retail store chain and so on.

##### Applications

- Analyzing the density of terrorist attacks in various regions of the world.
- Analyzing traffic volume based on GPS data. 

##### 　　Functional Entry

　　There are two functional entries.

- In the "Online" tab and "Analysis" group, select "Point Density".
- In the "Model Builder" tab click "New" to open the "Toolbox" panel then click "Density Analysis" under the "Online Analysis", or drag it into the "Model Builder" window. Double click the function node to open the "Parameter Settings" panel.

##### 　　Parameter Description


1. **iServer URL**: choose an address for iserver login. For specific instructions, please refer to [data input](DataInputType.html).
2. **Source dataset**: specify the dataset which will be used for the analysis. Click on the drop-down button and select a line dataset or a region dataset from the drop-down list. All of datasets in the drop-down list All of datasets in the drop-down list are filtered out for the analysis.
3. **Analysis Method**: Specifies the method as needed. Two methods are provided: simple density analysis or kernel density analysis.
4. **Mesh Type**: Specifies a shape for each grid cell: quadrilateral or hexagonal.
5. **Weight Field**: Specifies a set of field name where weight value of point to be analyzed is located. Format is such as: col7,col8. Optional parameter. **Remarks**: You can pass multiple field indexes which indicates weight and are separated by commas. If the parameter is null, the point weight is 1. Whether the parameter is set or not, it will be analyzed that the weight value is 1. The results are reflected in the attribute table field of the result dataset.
6. **Analysis Bounds**: The points outside the analysis range will not participate the calculation. The default is full range of input data.
7. **Mesh Size**: For quadrilateral grid, it is the side length; for hexagonal grid, it is the distance from vertex of the hexagon to the center point. (Default value is 10.)
　　![](img/DensityAnalysisGridType.png)
8. **Mesh Size Unit**: The optional units include: Meter, Kilometer, Yard, Foot, Mile (Meter is by default)
9. **Radius**: The searching radius for calculating density. Default value is 100
10. **Radius Unit**: Can select: Meter, Kilometer, Yard, Foot, Mile (Default value is Meter)
11. **Area Unit**: Can select: SquareMeter, SquareKiloMeter, Hectare, Are, Acre, SquareFoot, SquareYard, SquareMile (Default value is SquareMile)

##### Thematic Parameters

1. **Interval Mode**: Specify how to organize your data. Several classification modes are provided including: Equidistant Interval, Logarithmic Interval, Quantile Interval, Square Root Interval, Standard Deviation Interval.
2. **Number of Segments**: Specify how many classes the feature values will be divided into.
3. **Color Gradient Mode**: Set a color gradient mode. The provided modes contain: green-orange-purple gradient, green-orange gradient, rainbow color, spectral gradient, terrain gradient.

##### Analysis result

　　Click "Execute" to perform the analysis, and the result will be opened automatically on the map window and its path will be output in the output window. Following picture is the kernel analysis result to American transaction amount.

　　![](img/DensityAnalysisResult.png)

