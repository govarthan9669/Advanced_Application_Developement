import React from 'react';
import Typography from '@mui/material/Typography';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Box from '@mui/material/Box';
import Header from '../pages/Header';
import Footer from '../pages/Footer';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

const MainBoxItem = ({ title, details }) => {
  return (
    <Box flex="1" marginRight="10px" marginTop="5px">
      <div style={{ backgroundColor: '#006400', padding: '14px', marginBottom: '10px', borderRadius: '5px' }}>
        <Typography variant="h5" sx={{ color: '#fff', textAlign: 'center' }}>
          {title}
        </Typography>
      </div>
      <Card>
        <CardContent>
          {details.map((detail, index) => (
            <Typography key={index} variant="body2" sx={{ marginBottom: '15px', textAlign: 'justify' }}>
              {detail}
            </Typography>
          ))}
        </CardContent>
      </Card>
    </Box>
  );
};

const FAQBoxItem = ({ questions }) => {
  return (
    <Box flex="1" marginLeft="10px" marginTop="5px">
      <div style={{ backgroundColor: '#006400', padding: '14px', marginBottom: '10px', borderRadius: '5px' }}>
        <Typography variant="h5" sx={{ color: '#fff', textAlign: 'center' }}>
          FAQ
        </Typography>
      </div>
      <Card>

        <CardContent>
          {questions.map((qa, index) => (
            <Accordion key={index}>
              <AccordionSummary expandIcon={<ExpandMoreIcon />}>
              <Typography variant="body2" sx={{ marginBottom: '15px', textAlign: 'justify', cursor: 'pointer', fontWeight: 'bold' }}>
                  {qa.question}

                  {qa.question}
                </Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography variant="body2" sx={{ marginBottom: '15px', textAlign: 'justify' }}>
                  {qa.answer}
                </Typography>
              </AccordionDetails>
            </Accordion>
          ))}
        </CardContent>
      </Card>
    </Box>
  );
};

const AboutScheme = () => {
  return (
    <div>
      <Header></Header>
      <Box display="flex" flexDirection="row">
        <MainBoxItem
          title="Objectives"
          details={[
            "This financing facility will have numerous objectives for all the stakeholders in the agriculture eco-system.",
            "A. Farmers (including FPOs, PACS, Marketing Cooperative Societies, Multipurpose cooperative societies)",
            "  - Improved marketing infrastructure to allow farmers to sell directly to a larger base of consumers and hence, increase value realization for the farmers. This will improve the overall income of farmers.",
            "  - With investments in logistics infrastructure, farmers will be able to sell in the market with reduced post-harvest losses and a smaller number of intermediaries. This further will make farmers independent and improve access to market.",
            "  - With modern packaging and cold storage system access, farmers will be able to further decide when to sell in the market and improve realization.",
            "  - Community farming assets for improved productivity and optimization of inputs will result in substantial savings to farmers.",
            "B. Government",
            "  - Government will be able to direct priority sector lending in the currently unviable projects by supporting through interest subvention, incentive, and credit guarantee. This will initiate the cycle of innovation and private sector investment in agriculture.",
            "  - Due to improvements in post-harvest infrastructure, government will further be able to reduce national food wastage percentage thereby enable agriculture sector to become competitive with current global levels.",
            "  - Central/State Government Agencies or local bodies will be able to structure viable PPP projects for attracting investment in agriculture infrastructure.",
            "C. Agri entrepreneurs and startups",
            "  - With a dedicated source of funding, entrepreneurs will push for innovation in agriculture sector by leveraging new age technologies including IoT, AI.",
            "  - It will also connect the players in the ecosystem and hence, improve avenues for collaboration between entrepreneurs and farmers.",
            "D. Banking ecosystem",
            "  - With Credit Guarantee, incentive and interest subvention lending institutions will be able to lend with a lower risk. This scheme will help to enlarge their customer base and diversification of portfolio.",
            "  - Refinance facility will enable larger role for cooperative banks and RRBs.",
            "E. Consumers",
            "  - With reduced inefficiencies in post-harvest ecosystem, key benefit for consumers will be a larger share of produce reaching the market and hence, better quality and prices. Overall, the investment via the financing facility in agriculture infrastructure will benefit all the eco-system players.",
            // Objectives details
          ]}
        />
        <FAQBoxItem
          questions={[
            {
              question: "What is the financing facility about?",
              answer: "The financing facility aims to support various stakeholders in the agriculture eco-system, including farmers, government, agri entrepreneurs, banking ecosystem, and consumers."
            },
            {
              question: "How can farmers benefit from this scheme?",
              answer: "Farmers can benefit through improved marketing infrastructure, reduced post-harvest losses, and access to modern packaging and cold storage systems."
            },
            {
              question: "What role does the government play in this scheme?",
              answer: "The government can direct priority sector lending, reduce national food wastage, and structure viable PPP projects to attract investment in agriculture infrastructure."
            },
            {
              question: "How does this scheme impact agri entrepreneurs?",
              answer: "Agri entrepreneurs can leverage a dedicated source of funding to push for innovation in the agriculture sector using new-age technologies such as IoT and AI."
            },
            {
              question: "What benefits do consumers gain from the investment in agriculture infrastructure?",
              answer: "Consumers benefit from reduced inefficiencies in the post-harvest ecosystem, leading to better quality and prices in the market."
            },
            {
              question: "What is the financing facility about?",
              answer: "The financing facility aims to support various stakeholders in the agriculture eco-system, including farmers, government, agri entrepreneurs, banking ecosystem, and consumers."
            },
            {
              question: "How can farmers benefit from this scheme?",
              answer: "Farmers can benefit through improved marketing infrastructure, reduced post-harvest losses, and access to modern packaging and cold storage systems."
            },

            {
              question: "How does this scheme impact agri entrepreneurs?",
              answer: "Agri entrepreneurs can leverage a dedicated source of funding to push for innovation in the agriculture sector using new-age technologies such as IoT and AI."
            },
            // Add more FAQ questions and answers as needed
          ]}
        />
      </Box>
      <Footer></Footer>
    </div>
  );
};

export default AboutScheme;
