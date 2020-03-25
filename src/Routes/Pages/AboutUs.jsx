import React from 'react';
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import {makeStyles} from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import UploadDialog from "../../components/UploadDialog";
import ExpansionPanel from "@material-ui/core/ExpansionPanel";
import ExpansionPanelSummary from "@material-ui/core/ExpansionPanelSummary";
import Icon from "@material-ui/core/Icon";
import ExpansionPanelDetails from "@material-ui/core/ExpansionPanelDetails";
import {Link} from "react-router-dom";

function Copyright() {
    return (
        <Typography variant="body2" color="textSecondary" align="center">
            {'Copyright © '}
            <Link color="inherit" href="https://material-ui.com/">
                Virus Scope
            </Link>{' '}
            {new Date().getFullYear()}
            {'.'}
        </Typography>
    );
}

const useStyles = makeStyles((theme) => ({
    icon: {
        marginRight: theme.spacing(2),
    },
    heroContent: {
        backgroundColor: theme.palette.background.paper,
        padding: theme.spacing(8, 0, 6),
    },
    heroButtons: {
        marginTop: theme.spacing(4),
    },
    cardGrid: {
        paddingTop: theme.spacing(8),
        paddingBottom: theme.spacing(8),
    },
    card: {
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
    },
    cardMedia: {
        paddingTop: '56.25%', // 16:9
    },
    cardContent: {
        flexGrow: 1,
    },
    footer: {
        backgroundColor: theme.palette.background.paper,
        padding: theme.spacing(6),
    },
}));

const staff = [

    {
        name: 'Samer Alsayegh',
        position: 'LEAD PROGRAMMAR'
    },
    {
        name: 'Samer Alsayegh',
        position: 'DESIGNER'
    },
    {
        name: 'Samer Alsayegh',
        position: 'INTERN PROGRAMMAR'
    },
    {
        name: 'Samer Alsayegh',
        position: 'PRODUCED BY'
    },
    {
        name: 'Samer Alsayegh',
        position: 'MARKETED BY'
    },
    {
        name: 'Samer Alsayegh',
        position: 'BUILT BY'
    },
    {
        name: 'George Sayegh',
        position: 'idea guy',
        profileSrc: '',
    },
]

export default function Album() {
    const classes = useStyles();
    return (
        <React.Fragment>
            <main>
                {/* Hero unit */}
                <div className={classes.heroContent}>
                    <Container maxWidth="sm">
                        <Typography component="h1" variant="h2" align="center" color="textPrimary" gutterBottom>
                            What is Virus Scope?
                        </Typography>
                        <Typography variant="h5" align="center" color="textSecondary" paragraph>
                            Virus Scope aims to help users check their travel history against a crowd-sourced database
                            of infected users. We continue to monitor, ideally to notify users if they were in contact
                            with infected users and seek immediate help before any symptoms are presented.
                        </Typography>
                        <div className={classes.heroButtons}>
                            <Grid container spacing={2} justify="center">
                                <Grid item>
                                    <UploadDialog/>
                                </Grid>
                                <Grid item>
                                    <Button variant="outlined" color="primary" href={'#more_information'}>
                                        More Details
                                    </Button>
                                </Grid>
                            </Grid>
                        </div>
                    </Container>
                </div>
                <Container className={classes.cardGrid} maxWidth="md">
                    {/* End hero unit */}
                    <Typography component="h1" variant="h2" align="center" color="textPrimary" gutterBottom>
                        Team
                    </Typography>

                    <Grid container spacing={4}>
                        {staff.map((card) => (
                            <Grid item key={card} xs={12} sm={6} md={4}>
                                <Card className={classes.card}>
                                    <CardMedia
                                        className={classes.cardMedia}
                                        image={card.profileSrc || "https://source.unsplash.com/random"}
                                        title={card.name}
                                    />
                                    <CardContent className={classes.cardContent}>
                                        <Typography gutterBottom variant="h5" component="h2">
                                            {card.name}
                                        </Typography>
                                        <Typography>
                                            {card.position}
                                        </Typography>
                                    </CardContent>
                                </Card>
                            </Grid>
                        ))}
                    </Grid>
                </Container>
                <Container id={'more_information'}>
                    <ExpansionPanel>
                        <ExpansionPanelSummary
                            expandIcon={<Icon>expand_more</Icon>}
                            aria-controls="panel1a-content"
                            id="panel1a-header"
                        >
                            <Typography className={classes.heading}>Why is this tool made?</Typography>
                        </ExpansionPanelSummary>
                        <ExpansionPanelDetails>
                            <Typography>
                                When looking into pandemic cases, there are various factors at play. The three main
                                factors are; method of transmission, delay in symptoms, and lethality.
                                <br/>
                                COVID-19 is an example of a virus which transmits due to contact between an infected
                                person and a healthy person.
                                <br/>
                                <br/>
                                With the virus remaining on surfaces for upto 48 hours after last contact (add
                                reference), it can be difficult to trace the transmission of the virus without re-tracing
                                one's movement and activity.
                                <br/>
                                <br/>
                                This tool helps people know whether they came in-contact with an identified COVID-19
                                patient, so that they may seek immediate help. Even before symptoms appear (which can
                                take upto 14 days from contact).
                                <br/>
                            </Typography>
                        </ExpansionPanelDetails>
                    </ExpansionPanel>
                    <ExpansionPanel>
                        <ExpansionPanelSummary
                            expandIcon={<Icon>expand_more</Icon>}
                            aria-controls="panel2a-content"
                            id="panel2a-header">
                            <Typography className={classes.heading}><Link to={'/'}
                                                                          style={{
                                                                              textDecoration: 'none',
                                                                              color: 'inherit'
                                                                          }}>How can I test my location history?</Link></Typography>
                        </ExpansionPanelSummary>
                    </ExpansionPanel>
                </Container>
            </main>
            {/* Footer */}
            <footer className={classes.footer}>
                <Typography variant="h6" align="center" gutterBottom>
                    Made with {'<3'} for the world
                </Typography>
                <Typography variant="subtitle1" align="center" color="textSecondary" component="p">
                    Crowd-sourced data remains anonymous after upload. More information.
                </Typography>
                <Copyright/>
            </footer>
            {/* End footer */}
        </React.Fragment>
    );
}