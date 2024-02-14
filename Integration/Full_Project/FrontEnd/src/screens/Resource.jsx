// Resource.jsx
import React, { useState } from 'react';
import { Card, CardContent, Typography, Box, TextField } from '@mui/material';
import Header from '../pages/Header';
import Footer from '../pages/Footer';

const Resource = () => {
  // State for search filter
  const [searchTerm, setSearchTerm] = useState('');

  // List of eligible projects
  const eligibleProjects = [
    "Banana Ripening Chamber_Without Capital Subsidy",
    "Banana Ripening Chamber_With Capital Subsidy",
    "Bio Stimulant Unit_With Capital Subsidy",
    "Bio Stimulant Unit_Without Capital Subsidy",
    "Custom Hiring Centre - With Subsidy",
    "Custom Hiring Centre - Without Subsidy",
    "Cold Storage With Subsidy",
    "Cold Storage Without Subsidy",
    "Mustard Oil Processing Unit - With Subsidy",
    "Mustard Oil Processing Unit - Without Subsidy",
    "Waxing Plant - With subsidy",
    "Waxing Plant - Without subsidy",
    "Solar cold storage - With subsidy",
    "Solar cold storage - Without subsidy",
    "Organic Input Production Unit - With subsidy",
    "Organic Input Production Unit - Without subsidy",
    "Grain Warehouse_With Capital Subsidy",
    "Grain Warehouse_Without Capital Subsidy",
    "F&V Primary Processing Unit_With Capital Subsidy",
    "F&V Primary Processing Unit_Without Capital Subsidy",
    "Grain Warehouse - With subsidy",
    "Grain Warehouse - Without Subsidy",
    "Rice Mill - With Subsidy",
    "Rice Mill - Without Subsidy",
    "Turmeric Processing Unit - With Subsidy",
    "Turmeric Processing Plant - Without Subsidy",
    "Flour Mill - With subsidy",
    "Flour Mill - Without Subsidy",
    "Dal Mill - With Subsidy"
  ];

  // Filter eligible projects based on search term
  const filteredProjects = eligibleProjects.filter(project =>
    project.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div>
        <Header></Header>
    
    <Box width="80%" margin="auto">
      <Card>
        <CardContent>
          {/* Heading with specified CSS */}
          <div style={{ backgroundColor: '#006400', padding: '15px', marginBottom: '10px', borderRadius: '5px' }}>
            <Typography variant="h5" sx={{ color: '#fff', textAlign: 'center' }}>
              Eligible Projects under AIF
            </Typography>
          </div>

          {/* Resources Heading */}
          <Typography variant="h6" style={{ color: 'green', fontWeight: 'bold', marginBottom: '10px' }}>
            Resources
          </Typography>

          {/* Search Box */}
          <TextField
            label="Search"
            variant="outlined"
            fullWidth
            onChange={(e) => setSearchTerm(e.target.value)}
            sx={{ marginBottom: '10px', width:'50%' }}
          />

          {/* List of eligible projects with numbers and clickable links */}
          {filteredProjects.length > 0 ? (
            <ul style={{ listStyle: 'none', padding: 0 }}>
              {filteredProjects.map((project, index) => (
                <li key={index} style={{ marginBottom: '8px' }}>
                  <strong>{index + 1}.</strong> <a href={`#`} onClick={() => { /* Handle link click */ }} style={{ color: 'green' }}>{project}</a>
                </li>
              ))}
            </ul>
          ) : (
            <Typography variant="body2" color="textSecondary">
              No matching projects found.
            </Typography>
          )}
        </CardContent>
      </Card>
    </Box>
    <Footer></Footer>
    </div>
  );
};

export default Resource;
