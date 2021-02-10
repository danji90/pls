import React from 'react';
import { NavLink } from 'react-router-dom';
import {
  Typography,
  List,
  ListItem,
  ListItemIcon,
  makeStyles,
  Card,
  CardActionArea,
  CardMedia,
  CardContent,
  CardActions,
  Button,
} from '@material-ui/core';
import { Star, Launch } from '@material-ui/icons';
import PlsContainer from '../PlsContainer/PlsContainer';
import Divider from '../Divider/Divider';

import portrait from '../../utils/images/pete.png';
import { ReactComponent as PLSLogo } from '../../utils/images/pls_logo.svg';
import individual from '../../utils/images/individual.jpg';
import workshop from '../../utils/images/workshop.jpg';
import business from '../../utils/images/inhouse_lesson.jpg';

const useStyles = makeStyles(theme => ({
  landingTitle: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    padding: 10,
    width: '100%',
    margin: 50,
    '& h1': {
      fontSize: 80,
      maxWidth: 800,
      [theme.breakpoints.down('sm')]: {
        fontSize: 50,
      },
    },
    '& h2': {
      fontSize: '4vh',
    },
  },
  mainTitle: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-evenly',
    flexWrap: 'wrap',
  },
  mainImageContainer: {
    height: 250,
    width: 250,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    border: '5px solid #353535',
    borderRadius: '50%',
    backgroundColor: 'rgb(249, 249, 249)',
  },
  mainImage: {
    height: '42%',
  },
  interImage: {
    width: '100%',
  },
  bioContainer: {
    marginTop: 39,
    width: '100%',
    backgroundColor: '#f9f9f9',
  },
  bioBox: {
    padding: '50px 50px 50px',
  },
  bioFlex: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  bioTextContainer: {
    flex: 1,
    minWidth: 260,
    maxWidth: 400,
    marginRight: 30,
    [theme.breakpoints.down('xs')]: {
      padding: '20px 0',
    },
  },
  serviceCardContainer: {
    display: 'flex',
    flexWrap: 'wrap',
    padding: '20px 0',
    justifyContent: 'center',
    [theme.breakpoints.down('sm')]: {
      justifyContent: 'space-around',
    },
  },
  serviceCard: {
    width: 300,
    margin: '20px',
  },
  cardMedia: {
    height: 140,
  },
  serviceLink: {
    textDecoration: 'none',
    '&:visited': {
      color: 'inherit',
    },
  },
  bioImageContainer: {
    height: 220,
    width: 220,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    border: '5px solid #353535',
    borderRadius: '50%',
    marginRight: 30,
    marginBottom: 50,
    overflow: 'hidden',
  },
  bioCredentials: {
    flex: 1,
    minWidth: 260,
    [theme.breakpoints.down('sm')]: {
      paddingTop: 20,
    },
  },
}));

const Home = () => {
  const classes = useStyles();
  return (
    <>
      <PlsContainer>
        <div id="home_title" className={classes.landingTitle}>
          <div className={classes.mainTitle}>
            <div className={classes.mainImageContainer}>
              <PLSLogo className={classes.mainImage} />
            </div>
            <h1>Pete&apos;s Language Services</h1>
          </div>
          <h2>
            &quot;Help yourself to the biscuits&quot;, &quot;Which bay does the
            Bournemouth bus leave from?&quot;, &quot;What size are you?&quot;
            Most people nowadays can understand many things in English but how
            good is your command of English when it comes to speaking? We
            constantly need to practise and improve our English, whether
            it&apos;s for travel, to communicate with your son&apos;s
            girlfriend, or to get language certification for studies or for a
            job. Pete&apos;s Language Services is here to help you!
          </h2>
        </div>
      </PlsContainer>
      <PlsContainer flexDirection="column">
        <Divider idx={2} />
        <div id="home" className={classes.bioContainer}>
          <div className={classes.bioBox}>
            <Typography variant="h1" component="h1" align="center">
              But who&apos;s Pete?
            </Typography>
            <br />
            <div className={classes.bioFlex}>
              <div className={classes.bioImageContainer}>
                <img src={portrait} alt="source not found" />
              </div>
              <div className={classes.bioTextContainer}>
                <Typography>
                  Hi there! I&apos;m Pete Marsh-Hunn and I’m originally from
                  Bournemouth, UK. After some years of working as an English
                  teacher in Germany, Morocco and Saudi Arabia, I moved to
                  Bolzano/Bozen in the Dolomites region of Northern Italy where
                  I’ve been living for over 30 years. With my extensive
                  English-teaching experience and my very people-centred,
                  friendly approach I think I can help you in many different
                  ways to improve your English. Feel free to explore my service
                  offers:
                </Typography>
              </div>
              <div className={classes.bioCredentials}>
                <Typography>My credentials:</Typography>
                <List>
                  <ListItem>
                    <ListItemIcon>
                      <Star />
                    </ListItemIcon>
                    <Typography>English native-speaker from the UK.</Typography>
                  </ListItem>
                  <ListItem>
                    <ListItemIcon>
                      <Star />
                    </ListItemIcon>
                    <Typography>
                      University-trained language teacher.
                    </Typography>
                  </ListItem>
                  <ListItem>
                    <ListItemIcon>
                      <Star />
                    </ListItemIcon>
                    <Typography>
                      Over 35 years‘ English teaching experience of all
                      levels/age-groups.
                    </Typography>
                  </ListItem>
                  <ListItem>
                    <ListItemIcon>
                      <Star />
                    </ListItemIcon>
                    <Typography>
                      Extensive experience of teaching English in companies,
                      public administration, banks, etc.
                    </Typography>
                  </ListItem>
                  <ListItem>
                    <ListItemIcon>
                      <Star />
                    </ListItemIcon>
                    <Typography>
                      Extensive experience of teacher training at Uni
                      Bolzano/Bozen, at alpha beta piccadilly, etc.
                    </Typography>
                  </ListItem>
                  <ListItem>
                    <ListItemIcon>
                      <Star />
                    </ListItemIcon>
                    <Typography>
                      Official examiner for Cambridge and UniBz exams.
                    </Typography>
                  </ListItem>
                  <ListItem>
                    <ListItemIcon>
                      <Star />
                    </ListItemIcon>
                    <Typography>
                      Organiser of English hiking weeks all over Italy and
                      abroad.
                    </Typography>
                  </ListItem>
                  <ListItem>
                    <ListItemIcon>
                      <Star />
                    </ListItemIcon>
                    <Typography>
                      Extensive translating and proof-reading experience.
                    </Typography>
                  </ListItem>
                </List>
              </div>
              <Divider idx={1} />
            </div>
            <div style={{ marginTop: 40 }}>
              <Typography variant="h2" component="h2" align="center">
                Explore Pete&apos;s Language Services
              </Typography>
              <div className={classes.serviceCardContainer}>
                <Card className={classes.serviceCard}>
                  <CardActionArea>
                    <NavLink to="/individual" className={classes.serviceLink}>
                      <CardMedia
                        className={classes.cardMedia}
                        image={individual}
                        title="Individual services"
                      />
                      <CardContent>
                        <Typography variant="h5" component="h2">
                          Individual
                        </Typography>
                        <Typography>
                          Feel comfortable using English in every-day situations
                        </Typography>
                      </CardContent>
                    </NavLink>
                  </CardActionArea>
                  <CardActions>
                    <NavLink to="/individual" className={classes.serviceLink}>
                      <Button
                        size="medium"
                        color="secondary"
                        startIcon={<Launch />}
                      >
                        Learn More
                      </Button>
                    </NavLink>
                  </CardActions>
                </Card>
                <Card className={classes.serviceCard}>
                  <CardActionArea>
                    <NavLink to="/professional" className={classes.serviceLink}>
                      <CardMedia
                        className={classes.cardMedia}
                        image={workshop}
                        title="Professional services"
                      />
                      <CardContent>
                        <Typography variant="h5" component="h2">
                          Professional
                        </Typography>
                        <Typography>
                          Give your English a boost in your work environment
                        </Typography>
                      </CardContent>
                    </NavLink>
                  </CardActionArea>
                  <CardActions>
                    <NavLink to="/professional" className={classes.serviceLink}>
                      <Button
                        size="medium"
                        color="secondary"
                        startIcon={<Launch />}
                      >
                        Learn More
                      </Button>
                    </NavLink>
                  </CardActions>
                </Card>
                <Card className={classes.serviceCard}>
                  <CardActionArea>
                    <NavLink to="/business" className={classes.serviceLink}>
                      <CardMedia
                        className={classes.cardMedia}
                        image={business}
                        title="Business services"
                      />
                      <CardContent>
                        <Typography variant="h5" component="h2">
                          Business
                        </Typography>
                        <Typography>
                          Provide your employees with high-level communication
                          skills in English
                        </Typography>
                      </CardContent>
                    </NavLink>
                  </CardActionArea>
                  <CardActions>
                    <NavLink to="/business" className={classes.serviceLink}>
                      <Button
                        size="medium"
                        color="secondary"
                        startIcon={<Launch />}
                      >
                        Learn More
                      </Button>
                    </NavLink>
                  </CardActions>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </PlsContainer>
    </>
  );
};

export default Home;
