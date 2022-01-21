import { 
    Card, 
    CardContent, 
    CardMedia, 
    IconButton, 
    Typography, 
    Slider,
    makeStyles
} from '@material-ui/core';
import React from 'react';
import QueuedSongList from './QueuedSongList';
import { PlayArrow, SkipNext, SkipPrevious } from '@material-ui/icons';

const useStyles = makeStyles( theme => ({
    container: {
        display: 'flex',
        justifyContent: 'space-between'
    },
    details: {
        display: 'flex',
        flexDirection: 'column',
        padding: '0px 15px'
    },
    content: {
        flex: '1 0 auto'
    },
    thumbnail: {
        width: 150
    },
    controls: {
        display: 'flex',
        alignItems: 'center',
        paddingLeft: theme.spacing(1),
        paddingRight: theme.spacing(1)
    },
    playIcon: {
        height: 38,
        width: 38
    }
}))

function SongPlayer() {
    const classes = useStyles();
    return<>
        <Card className={classes.container} variant="outlined">
            <div className={classes.details}>
                <CardContent className={classes.content}>
                    <Typography variant="h5" component="h3">
                        Title
                    </Typography>
                    <Typography variant="subtitle2" component="p">
                        Artist
                    </Typography>
                </CardContent>
                <div className={classes.controls}>
                    <IconButton>
                        <SkipPrevious />
                    </IconButton>
                    <IconButton>
                        <PlayArrow className={classes.playIcon}/>
                    </IconButton>
                    <IconButton>
                        <SkipNext />
                    </IconButton>
                    <Typography variant="subtitle1" component="p" color="secondary">
                        00:01:30
                    </Typography>
                </div>
                <Slider 
                    type="range"
                    min={0}
                    max={1}
                    step={0.01}
                />
            </div>
            <CardMedia className={classes.thumbnail}
                image="https://images.greenmangaming.com/0bfcdb0e39d84536be9fcbf4e9c255fb/6b81147096c342feb535f72bdf3ea302.jpg"
            />
        </Card>
    </>
}

export default SongPlayer;