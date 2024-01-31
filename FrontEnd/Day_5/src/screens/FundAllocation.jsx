import React from 'react';
import Typography from '@mui/material/Typography';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Box from '@mui/material/Box';
import Table from '@mui/material/Table';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import TableCell from '@mui/material/TableCell';
import TableBody from '@mui/material/TableBody';
import Header from '../pages/Header';
import Footer from '../pages/Footer';
const FundAllocation = () => {
  return (
    <><Header/>
    <Box width="80%" marginTop="10px" marginLeft="10%" >
      <div style={{ backgroundColor: '#006400', padding: '15px', marginBottom: '0px', borderRadius: '5px' }}>
        <Typography variant="h5" sx={{ color: '#fff', textAlign: 'center' }}>
          Fund Allocation
        </Typography>
      </div>
      <Card>
        <CardContent>
          <Table sx={{ border: '1px solid black' }}>
            <TableHead>
              <TableRow>
                <TableCell sx={{ backgroundColor: '#808080', border: '1px solid black' }}>S No.</TableCell>
                <TableCell sx={{ backgroundColor: '#808080', border: '1px solid black' }}>State/UT</TableCell>
                <TableCell sx={{ backgroundColor: '#808080', border: '1px solid black' }}>Tentative Fund Allocation (Rs. Cr)</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              <TableRow sx={{ backgroundColor: '#f0f0f0' }}>
                <TableCell>1</TableCell>
                <TableCell>Uttar Pradesh</TableCell>
                <TableCell>12831</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>2</TableCell>
                <TableCell>Rajasthan</TableCell>
                <TableCell>9015</TableCell>
              </TableRow>
              <TableRow sx={{ backgroundColor: '#f0f0f0' }}>
                <TableCell>3</TableCell>
                <TableCell>Maharashtra</TableCell>
                <TableCell>8460</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>4</TableCell>
                <TableCell>Madhya Pradesh</TableCell>
                <TableCell>7440</TableCell>
              </TableRow>
              <TableRow sx={{ backgroundColor: '#f0f0f0' }}>
                <TableCell>5</TableCell>
                <TableCell>Gujarat</TableCell>
                <TableCell>7282</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>6</TableCell>
                <TableCell>West Bengal</TableCell>
                <TableCell>7260</TableCell>
              </TableRow>
              <TableRow sx={{ backgroundColor: '#f0f0f0' }}>
                <TableCell>7</TableCell>
                <TableCell>Andhra Pradesh</TableCell>
                <TableCell>6540</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>8</TableCell>
                <TableCell>Tamil Nadu</TableCell>
                <TableCell>5990</TableCell>
              </TableRow>
              <TableRow sx={{ backgroundColor: '#f0f0f0' }}>
                <TableCell>9</TableCell>
                <TableCell>Punjab</TableCell>
                <TableCell>4713</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>10</TableCell>
                <TableCell>Karnataka</TableCell>
                <TableCell>4525</TableCell>
              </TableRow>
              <TableRow sx={{ backgroundColor: '#f0f0f0' }}>
                <TableCell>11</TableCell>
                <TableCell>Bihar</TableCell>
                <TableCell>3980</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>12</TableCell>
                <TableCell>Haryana</TableCell>
                <TableCell>3900</TableCell>
              </TableRow>
              <TableRow sx={{ backgroundColor: '#f0f0f0' }}>
                <TableCell>13</TableCell>
                <TableCell>Telangana</TableCell>
                <TableCell>3075</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>14</TableCell>
                <TableCell>Kerala</TableCell>
                <TableCell>2520</TableCell>
              </TableRow>
              <TableRow sx={{ backgroundColor: '#f0f0f0' }}>
                <TableCell>15</TableCell>
                <TableCell>Odisha</TableCell>
                <TableCell>2500</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>16</TableCell>
                <TableCell>Assam</TableCell>
                <TableCell>2050</TableCell>
              </TableRow>
              <TableRow sx={{ backgroundColor: '#f0f0f0' }}>
                <TableCell>17</TableCell>
                <TableCell>Chhattisgarh</TableCell>
                <TableCell>1990</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>18</TableCell>
                <TableCell>Jharkhand</TableCell>
                <TableCell>1445</TableCell>
              </TableRow>
              <TableRow sx={{ backgroundColor: '#f0f0f0' }}>
                <TableCell>19</TableCell>
                <TableCell>Himachal Pradesh</TableCell>
                <TableCell>925</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>20</TableCell>
                <TableCell>Jammu & Kashmir &Ladakh</TableCell>
                <TableCell>900</TableCell>
              </TableRow>
              <TableRow sx={{ backgroundColor: '#f0f0f0' }}>
                <TableCell>21</TableCell>
                <TableCell>Uttarakhand</TableCell>
                <TableCell>785</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>22</TableCell>
                <TableCell>Tripura</TableCell>
                <TableCell>360</TableCell>
              </TableRow>
              <TableRow sx={{ backgroundColor: '#f0f0f0' }}>
                <TableCell>23</TableCell>
                <TableCell>Arunachal Pradesh</TableCell>
                <TableCell>290</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>24</TableCell>
                <TableCell>Nagaland</TableCell>
                <TableCell>230</TableCell>
              </TableRow>
              <TableRow sx={{ backgroundColor: '#f0f0f0' }}>
                <TableCell>25</TableCell>
                <TableCell>Manipur</TableCell>
                <TableCell>200</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>26</TableCell>
                <TableCell>Mizoram</TableCell>
                <TableCell>196</TableCell>
              </TableRow>
              <TableRow sx={{ backgroundColor: '#f0f0f0' }}>
                <TableCell>27</TableCell>
                <TableCell>Meghalaya</TableCell>
                <TableCell>190</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>28</TableCell>
                <TableCell>Goa</TableCell>
                <TableCell>110</TableCell>
              </TableRow>
              <TableRow sx={{ backgroundColor: '#f0f0f0' }}>
                <TableCell>29</TableCell>
                <TableCell>Delhi</TableCell>
                <TableCell>102</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>30</TableCell>
                <TableCell>Sikkim</TableCell>
                <TableCell>56</TableCell>
              </TableRow>
              <TableRow sx={{ backgroundColor: '#f0f0f0' }}>
                <TableCell>31</TableCell>
                <TableCell>Puducherry</TableCell>
                <TableCell>48</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>32</TableCell>
                <TableCell>A & N Islands</TableCell>
                <TableCell>40</TableCell>
              </TableRow>
              <TableRow sx={{ backgroundColor: '#f0f0f0' }}>
                <TableCell>33</TableCell>
                <TableCell>Daman & Diu</TableCell>
                <TableCell>22</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>34</TableCell>
                <TableCell>Lakshadweep</TableCell>
                <TableCell>11</TableCell>
              </TableRow>
              <TableRow sx={{ backgroundColor: '#f0f0f0' }}>
                <TableCell>35</TableCell>
                <TableCell>Dadra & Nagar Haveli</TableCell>
                <TableCell>10</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>36</TableCell>
                <TableCell>Chandigarh</TableCell>
                <TableCell>9</TableCell>
              </TableRow>
              <TableRow sx={{ backgroundColor: '#808080', border: '1px solid black' }}>
                <TableCell>Total</TableCell>
                <TableCell></TableCell>
                <TableCell>1,00,000</TableCell>
              </TableRow>
              {/* Additional Column-wise Lines */}
              
             
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </Box>
    <Footer></Footer>
    </>
  );
};

export default FundAllocation;
