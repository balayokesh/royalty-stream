import {
  Container,
  Typography,
  Grid,
  Card,
  CardActionArea,
  Box,
  IconButton,
} from '@mui/material';
import YouTubeIcon from '@mui/icons-material/YouTube';
import TwitterIcon from '@mui/icons-material/Twitter';
import { Link } from 'react-router-dom';

const cardStyles = [
  { backgroundColor: '#FFF3F3' }, // pale red
  { backgroundColor: '#E7F3FF' }, // pale blue
];

function Home() {
  const platforms = [
    {
      name: 'YouTube',
      description:
        'View your YouTube channel analytics, including video performance and revenue estimates.',
      icon: <YouTubeIcon fontSize="large" sx={{ color: '#D32F2F' }} />,
      url: '/youtube',
    },
    {
      name: 'Twitter',
      description: 'Monitor your Twitter followers and tweet engagement.',
      icon: <TwitterIcon fontSize="large" sx={{ color: '#1DA1F2' }} />,
      url: '/twitter',
    }
  ];

  return (
    <Container sx={{ my: 6 }}>
      <Typography
        variant="h3"
        component="h1"
        gutterBottom
        fontWeight="bold"
        align="center"
      >
        Welcome to Royalty Stream
      </Typography>
      <Typography
        variant="body1"
        color="text.secondary"
        align="center"
        mb={6}
      >
        This is the home page. Navigate to your favorite streaming platforms to
        view analytics and manage your content.
      </Typography>

      <Grid
        container
        spacing={4}
        justifyContent="center"
        alignItems="stretch"
      >
        {platforms.map((platform, idx) => (
          <Grid item xs={12} sm={6} md={4} key={platform.name} sx={{ display: 'flex' }}>
            <Card
              sx={{
                flexGrow: 1,
                height: 260,
                borderRadius: 3,
                boxShadow:
                  '0 6px 15px rgba(0,0,0,0.1), 0 1px 3px rgba(0,0,0,0.06)',
                backgroundColor: cardStyles[idx].backgroundColor,
                transition: 'transform 0.3s ease',
                "&:hover": { transform: 'translateY(-10px)' },
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                textAlign: 'center',
              }}
              elevation={6}
            >
              <CardActionArea
                component={Link}
                to={platform.url}
                target="_blank"
                rel="noopener noreferrer"
                sx={{ p: 3, width: '100%', height: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}
              >
                <Box sx={{ mb: 2 }}>
                  <IconButton size="large" disableRipple sx={{ cursor: 'default', color: 'inherit' }}>
                    {platform.icon}
                  </IconButton>
                </Box>
                <Typography variant="h6" gutterBottom>
                  {platform.name}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {platform.description}
                </Typography>
              </CardActionArea>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}

export default Home;
