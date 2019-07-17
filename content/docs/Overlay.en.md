title: Overlay Analysis
---

　　Under the same spatial reference system, performs a series of collection operations on two input datasets thereby generating a new dataset to extract new spatial geometry information. For example, people want to know about land distribution in an administrative district, overlaying Chinese land use dataset with the administrative district planning dataset and then performing the analysis. 

　　At least three datasets are required for this analysis, and one dataset can be a point, line or region dataset which is called the source dataset (the first dataset in SuperMapGIS), another one is a region dataset which is called the overlay-object dataset (the second dataset in SuperMapGIS), and the last one is a result dataset including geometrical information and attributes of overlaid data.


##### 　　Functional Entry

　　There are two functional entries.

- In the "Online" tab and "Analysis" group, select "Overlay Analysis".
- In the "Model Builder" tab click "New" to open the "Toolbox" panel then click "Overlay Analysis" under the "Online Analysis", or drag it into the "Model Builder" window. Double click the function node to open the "Parameter Settings" panel.

##### 　　Parameters

　　All parameters of the tool Overlay Analysis can be divided into four classes: iServer, source data, overlay data and analysis parameters, for the first two classes of parameters, see [Data Input](DataInputType.html). Following contents detail all parameters in the last two classes.

1. **Overlay Data**: Required. Referring to the dataset (which is must be a region dataset) where the overlay objects are located. 
2. **Overlay Analysis Type**: Seven operations are provided. For different operations, required source dataset types and overlay-object dataset types are different too.
   - Clip, Intersect, Erase, Identity: the source dataset type could be point, line or region.
   - Update, XOR, Union: the source dataset type must be region.
3. **Retained fields**: specify which fields from input data will be kept in the result data, setting several fields are allowed which can be separated by commas like zone, borough.

