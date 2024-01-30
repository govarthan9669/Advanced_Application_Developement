

import React from 'react';
import { Card, CardContent, Typography, Table, TableHead, TableBody, TableRow, TableCell, Box } from '@mui/material';
import Header from '../pages/Header';
import Footer from '../pages/Footer';

const EligibleProjects = () => {
  return (
    <div>
      <Header/>
    
    <Box width="80%" margin="auto">
      <Card>
        <CardContent>
          {/* Heading with specified CSS */}
          <div style={{ backgroundColor: '#006400', padding: '15px', marginBottom: '10px', borderRadius: '5px' }}>
            <Typography variant="h5" sx={{ color: '#fff', textAlign: 'center' }}>
              Eligible Projects under AIF
            </Typography>
          </div>

          {/* Subheading with specified CSS */}
          <Typography variant="h6" style={{ color: 'black', fontWeight: 'bold', marginBottom: '10px' }}>
            A. Eligible projects for all beneficiaries
          </Typography>

          {/* List of eligible projects */}
          <ul>
            <li>Organic inputs production</li>
            <li>Bio stimulant production units</li>
            <li>Nursery</li>
            <li>Tissue culture</li>
            <li>Seed Processing</li>
            <li>Custom Hiring Center</li>
            <li>Infrastructure for smart and precision agriculture</li>
            <ul>
              <li>Farm/Harvest Automation</li>
              <li>Purchase of drones, putting up specialized sensors on field, Blockchain and AI in agriculture etc.</li>
              <li>Remote sensing and Internet of Things (IOT) such as automatic weather station, Farm advisory services through GIS applications.</li>
            </ul>
            <li>Logistics facilities - Reefer Van& Insulated vehicles</li>
            <li>Assaying Units</li>
            <li>Supply chain services including e-marketing platforms</li>
            <li>Warehouse & Silos</li>
            <li>Cold Stores and Cold Chain</li>
            <li>Packaging Units</li>
            <li>Primary Processing activities</li>
          </ul>

          {/* Table with gray color for S.No and border color */}
          <Table sx={{ border: '1px solid black' }}>
            <TableHead>
              <TableRow>
                <TableCell sx={{ backgroundColor: '#808080', border: '1px solid black' }}>Sl. No.</TableCell>
                <TableCell sx={{ backgroundColor: '#808080', border: '1px solid black' }}>Crops</TableCell>
                <TableCell sx={{ backgroundColor: '#808080', border: '1px solid black' }}>Eligible Activities</TableCell>
                <TableCell sx={{ backgroundColor: '#808080', border: '1px solid black' }}>Not Eligible</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {/* Rows added as per the specified data */}
              <TableRow sx={{ backgroundColor: '#f0f0f0' }}>
                <TableCell>1</TableCell>
                <TableCell>Cereals & Millets</TableCell>
                <TableCell>
                  Wheat, rice, sorghum, barley, maize, oat, etc.
                  <ul>
                    <li>Cleaning</li>
                    <li>De-stoning</li>
                    <li>Sorting & grading</li>
                    <li>Hulling</li>
                    <li>Milling (flour, maida, sooji, daliya)</li>
                    <li>Pounding</li>
                    <li>Grinding</li>
                    <li>Tempering</li>
                    <li>Parboiling</li>
                    <li>Soaking</li>
                    <li>Drying</li>
                    <li>Sieving</li>
                    <li>Irradiation</li>
                    <li>Packaging</li>
                    <li>Flaking</li>
                    <li>Storage (warehouse, silos)</li>
                  </ul>
                  <ul>
                    <li>Fermentation</li>
                    <li>Baking</li>
                    <li>Puffing</li>
                    <li>Frying</li>
                    <li>Extrusion</li>
                    <li>Blending</li>
                    <li>Roasting</li>
                    <li>Rice fortification (Bread, biscuits, pasta, snack foods, etc. not eligible)</li>
                  </ul>
                </TableCell>
                <TableCell>
                  <ul>
                    <li>Fermentation</li>
                    <li>Baking</li>
                    <li>Puffing</li>
                    <li>Frying</li>
                    <li>Extrusion</li>
                    <li>Blending</li>
                    <li>Roasting</li>
                    <li>Rice fortification (Bread, biscuits, pasta, snack foods, etc. not eligible)</li>
                  </ul>
                </TableCell>
              </TableRow>

              <TableRow>
                <TableCell>2</TableCell>
                <TableCell>Fruits and vegetables</TableCell>
                <TableCell>
                  {/* Add content for Fruits and vegetables */}
                  <ul>
                    <li>Washing</li>
                    <li>Cleaning</li>
                    <li>Drying</li>
                    <li>Sorting</li>
                    <li>Grading</li>
                    <li>Freezing (IQF & blast)</li>
                    <li>Blanching for primary processing</li>
                    <li>Cooling</li>
                    <li>Waxing</li>
                    <li>Conditioning</li>
                    <li>Packhouse</li>
                    <li>Cold store</li>
                    <li>Ripening chamber</li>
                    <li>Reefer van</li>
                    <li>Bucket elevators</li>
                    <li>Packaging</li>
                  </ul>
                </TableCell>
                <TableCell>
                  {/* Add content for Not Eligible */}
                  <ul>
                    <li>Dehydrated products</li>
                    <li>Concentrated products</li>
                    <li>Canning</li>
                    <li>Juice extraction</li>
                    <li>Sauces</li>
                    <li>Candies</li>
                    <li>Jam and Jelly</li>
                  </ul>
                </TableCell>
              </TableRow>

              <TableRow sx={{ backgroundColor: '#f0f0f0' }}>
                <TableCell>3</TableCell>
                <TableCell>Oilseeds & Oil palms</TableCell>
                <TableCell>
                  {/* Add content for Oilseeds & Oil palms */}
                  <ul>
                    <li>Cleaning</li>
                    <li>De-stoning</li>
                    <li>De-husking (decorticating machines)</li>
                    <li>Winnowing</li>
                    <li>Oil extraction (ghani, hydraulic press etc.)</li>
                    <li>Solvent Extraction</li>
                    <li>Oil seed cake</li>
                  </ul>
                </TableCell>
                <TableCell>
                  {/* Add content for Not Eligible */}
                  <ul>
                    <li>Refining</li>
                  </ul>
                </TableCell>
              </TableRow>

              <TableRow>
                <TableCell>4</TableCell>
                <TableCell>Pulses</TableCell>
                <TableCell>
                  {/* Add content for Pulses */}
                  <ul>
                    <li>Cleaning</li>
                    <li>De-stoning</li>
                    <li>Drying</li>
                    <li>Sorting & grading</li>
                    <li>De-husking</li>
                    <li>Splitting</li>
                    <li>De-hulling</li>
                    <li>Milling (Besan)</li>
                    <li>Irradiation</li>
                    <li>Packaging</li>
                    <li>Storage</li>
                  </ul>
                </TableCell>
                <TableCell>
                  {/* Add content for Not Eligible */}
                  <ul>
                    <li>Canning</li>
                    <li>Products like Papads</li>
                    <li>Pulse based ready to eat foods</li>
                    <li>Puffed chickpea</li>
                  </ul>
                </TableCell>
              </TableRow>

              <TableRow sx={{ backgroundColor: '#f0f0f0' }}>
                <TableCell>5</TableCell>
                <TableCell>Spices</TableCell>
                <TableCell>
                  {/* Add content for Spices */}
                  <ul>
                    <li>Cleaning</li>
                    <li>Drying</li>
                    <li>Sorting</li>
                    <li>Boiling</li>
                    <li>Polishing</li>
                    <li>Grinding</li>
                    <li>Packaging</li>
                    <li>Storage</li>
                    <li>Irradiation</li>
                  </ul>
                </TableCell>
                <TableCell>
                  {/* Add content for Not Eligible */}
                  <ul>
                    <li>Roasted products</li>
                    <li>Paste</li>
                  </ul>
                </TableCell>
              </TableRow>

              <TableRow>
                <TableCell>6</TableCell>
                <TableCell>Cash Crops</TableCell>
                <TableCell>
                  {/* Add content for Cash Crops */}
                  <ul>
                    <li>Cotton</li>
                    <li>Cleaning</li>
                    <li>Drying</li>
                    <li>Ginning</li>
                    <li>Pressing & Bailing</li>
                    <li>Linting</li>
                    <li>Cotton seed oil</li>
                    <li>Seed cake</li>
                  </ul>
                  <ul>
                    <li>Sugarcane</li>
                    <li>Cane unloading</li>
                    <li>Cleaning</li>
                    <li>Cane breaking</li>
                    <li>Cane milling</li>
                    <li>Straining</li>
                    <li>Evaporators</li>
                    <li>Centrifugation</li>
                    <li>Storage tanks</li>
                    <li>Dryers</li>
                    <li>Sugar crystals</li>
                    <li>Jaggery</li>
                    <li>Packaging & storage</li>
                  </ul>
                  <ul>
                    <li>Jute</li>
                    <li>Cutting</li>
                    <li>Retting</li>
                    <li>Stripping</li>
                    <li>Washing</li>
                    <li>Drying</li>
                    <li>Bailing</li>
                    <li>Packing</li>
                    <li>Storage</li>
                  </ul>
                  <ul>
                    <li>Tea & coffee</li>
                    <li>Cleaning & Washing</li>
                    <li>Withering</li>
                    <li>Rolling</li>
                    <li>Fermentation</li>
                    <li>Drying</li>
                    <li>Sorting</li>
                    <li>Drying of cherries</li>
                  </ul>
                  <ul>
                    <li>Coconut</li>
                    <li>Dehusking</li>
                    <li>Deshelling</li>
                    <li>Cutting</li>
                    <li>Drying (copra)</li>
                    <li>Grinding</li>
                    <li>Extraction of coconut water</li>
                    <li>Coconut milk extraction</li>
                    <li>Centrifugation</li>
                    <li>Hot processing</li>
                    <li>Virgin coconut oil</li>
                    <li>Packaging</li>
                  </ul>
                  <ul>
                    <li>Rubber</li>
                    <li>Mastication</li>
                    <li>Mixing</li>
                    <li>Shaping</li>
                    <li>Curing</li>
                    <li>Irradiation</li>
                  </ul>
                  <ul>
                    <li>Tobacco</li>
                    <li>Cleaning</li>
                    <li>Grading</li>
                    <li>Sorting</li>
                    <li>Curing</li>
                    <li>Drying</li>
                    <li>Storage</li>
                  </ul>
                </TableCell>
                <TableCell>
                  {/* Add content for Not Eligible */}
                  <ul>
                    <li>Fibre making</li>
                    <li>FibreScouring</li>
                    <li>Weaving</li>
                  </ul>
                  <ul>
                    <li>Formation of paper & board with bagasse</li>
                    <li>Fermentation</li>
                    <li>Alcoholic distillation</li>
                  </ul>
                  <ul>
                    <li>Formation of Jute cloth</li>
                    <li>Bags</li>
                    <li>Sacks</li>
                  </ul>
                  <ul>
                    <li>Formation of chocolates</li>
                  </ul>
                  <ul>
                    <li>Cream</li>
                    <li>Butter</li>
                  </ul>
                  <ul>
                    <li>Secondary rubber products like tyres, mattresses, bottles, boots etc.</li>
                  </ul>
                  <ul>
                    <li>Making of Chew, Cigars, Dips etc.</li>
                  </ul>
                  <ul>
                    <li>Cashew fruit juice</li>
                    <li>Roasted products</li>
                    <li>Nut spreads</li>
                    <li>Almond milk</li>
                    <li>Powder</li>
                    <li>Spreads</li>
                    <li>Roasting</li>
                  </ul>
                </TableCell>
              </TableRow>
                            {/* Continue adding more rows */}
                            <TableRow sx={{ backgroundColor: '#f0f0f0' }}>
                <TableCell>7</TableCell>
                <TableCell>Fiber Crops</TableCell>
                <TableCell>
                  {/* Add content for Fiber Crops */}
                  <ul>
                    <li>Cotton</li>
                    <li>Cleaning</li>
                    <li>Drying</li>
                    <li>Ginning</li>
                    <li>Pressing & Bailing</li>
                    <li>Linting</li>
                    <li>Cotton seed oil</li>
                    <li>Seed cake</li>
                  </ul>
                  <ul>
                    <li>Jute</li>
                    <li>Cutting</li>
                    <li>Retting</li>
                    <li>Stripping</li>
                    <li>Washing</li>
                    <li>Drying</li>
                    <li>Bailing</li>
                    <li>Packing</li>
                    <li>Storage</li>
                  </ul>
                </TableCell>
                <TableCell>
                  {/* Add content for Not Eligible */}
                  <ul>
                    <li>Fibre making</li>
                    <li>FibreScouring</li>
                    <li>Weaving</li>
                  </ul>
                </TableCell>
              </TableRow>

              
              {/* Add more rows as needed */}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </Box>
    <Footer></Footer>
    </div>
    
  );
};

export default EligibleProjects;

