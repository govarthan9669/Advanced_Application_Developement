import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';

const Footer = () => {
  return (
    <div>
        <div style={{ position: 'fixed', bottom: 0, left: 0, right: 0, backgroundColor: '#006400', color: 'white', padding: '1px', textAlign: 'center', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <div>
          <span style={{ fontSize: '14px' }}>Ver 7.12.2</span>
        </div>
        <div>
          <span style={{ fontSize: '14px' }}>Website Content Managed by AgroCloud Finance: Revolutionizing Agricultural</span>
        </div>
        <div style={{ display: 'flex', gap: '10px' }}>
          {/* Using Material Icons for social media icons */}
          <a href="#" target="_blank" rel="noopener noreferrer" style={{ color: 'white', textDecoration: 'none' }}>
            <FacebookIcon style={{ fontSize: '20px', '&:hover': { color: '#2196F3' } }} />
          </a>
          <a href="#" target="_blank" rel="noopener noreferrer" style={{ color: 'white', textDecoration: 'none' }}>
            <TwitterIcon style={{ fontSize: '20px', '&:hover': { color: '#2196F3' } }} />
          </a>
          <a href="#" target="_blank" rel="noopener noreferrer" style={{ color: 'white', textDecoration: 'none' }}>
            <LinkedInIcon style={{ fontSize: '20px', '&:hover': { color: '#2196F3' } }} />
          </a>
          <a href="#" target="_blank" rel="noopener noreferrer" style={{ color: 'white', textDecoration: 'none' }}>
            <InstagramIcon style={{ fontSize: '20px', '&:hover': { color: '#2196F3' } }} />
          </a>
        </div>
      </div>
    </div>
    
    
  );
};
    


export default Footer