import React from 'react';
import { 
    Card, 
    CardContent, 
    CircularProgress, 
    Typography, 
    CardMedia, 
    IconButton, 
    CardActions,
    makeStyles,
    Avatar,
    useMediaQuery
} from '@material-ui/core';
import { Delete } from '@material-ui/icons';

const useStyles = makeStyles({
    avatar: {
        width: 44,
        height: 44
    },
    text: {
        textOverflow: 'ellipsis',
        overflow: 'hidden'
    },
    container: {
        display: 'grid',
        gridAutoFlow: 'column',
        gridTemplateColumns: '50px auto 50px',
        gridGap: 12,
        alignItems: 'center',
        marginTop: 10
    },
    songInfoContainer: {
        overflow: 'hidden',
        whiteSpace: 'nowrap'
    }
})

function QueuedSongList() {
    const greaterThanMd = useMediaQuery(theme => theme.breakpoints.up('md'));
    const song = {
        song: "Octopath Traveler",
        artist: "Mitari Mango",
        thumbnail: "https://images.greenmangaming.com/0bfcdb0e39d84536be9fcbf4e9c255fb/6b81147096c342feb535f72bdf3ea302.jpg"
    }

    return greaterThanMd && (
        <div style={{margin: '10px 0'}}>
            <Typography color="textSecondary" variant="button">
                QUEUE (5)
            </Typography>
            {Array.from({ length: 5}, () => song).map((song,i) => (
                <QueuedSong key={i} song={song} />
            ))}
        </div>
    )
}

function QueuedSong({ song }) {
    const { thumbnail, artist, title } = song;
    const classes = useStyles();

    return (
        <div className={classes.container}>
            <Avatar className={classes.avatar} src={thumbnail} alt="Song thumbnail"/>
            <div className={classes.songInfoContainer}>
                <Typography className={classes.text} variant="subtitle2">
                    {title}
                </Typography>
                <Typography variant="body2" color="secondary">
                    {artist}
                </Typography>
            </div>
            <IconButton>
                <Delete color="error" />
            </IconButton>
        </div>    
    )
}

export default QueuedSongList;