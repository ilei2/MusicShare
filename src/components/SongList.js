import { 
    Card, 
    CardContent, 
    CircularProgress, 
    Typography, 
    CardMedia, 
    IconButton, 
    CardActions,
    makeStyles
} from '@material-ui/core';
import { CallMissedSharp, PlayArrow, Save} from '@material-ui/icons';
import React from 'react';

const useStyles = makeStyles(theme => ({
    container: {
        margin: theme.spacing(3)
    },
    songInfoContainer: {
        display: 'flex',
        alignItems: 'center'
    },
    songInfo: {
        width: '100%',
        display: 'flex',
        justifyContent: 'space-between'
    },
    thumbnail: {
        objectFit: 'cover',
        width:140,
        height: 140
    }
}))

function SongList() {
    const classes = useStyles();
    let loading = false;

    const song = {
        song: "Octopath Traveler",
        artist: "Mitari Mango",
        thumbnail: "https://images.greenmangaming.com/0bfcdb0e39d84536be9fcbf4e9c255fb/6b81147096c342feb535f72bdf3ea302.jpg"
    }

    if (loading) {
        return (
            <div style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                marginTop: 50
            }}>
                <CircularProgress/>
            </div>
        )
    }

    return<div>{Array.from({ length: 10}, () => song).map((song,i) => (
        <Song key={i} song={song} />
    ))}</div>

    function Song({ song }) {
        const { thumbnail, artist, title } = song;
        return <Card className={classes.container}>
            <div className={classes.songInfoContainer}>
                <CardMedia className={classes.thumbnail} image={thumbnail} />
                <div className={classes.songInfo}>
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="h2">
                            {title}
                        </Typography>
                        <Typography variant="vody1" component="p" color="textSecondary">
                            {artist}
                        </Typography>
                    </CardContent>
                    <CardActions>
                        <IconButton size="small" color="primary">
                            <PlayArrow/>
                        </IconButton>
                        <IconButton size="small" color="secondary">
                            <Save color="secondary"/>
                        </IconButton>
                    </CardActions>
                </div>
            </div>
        </Card>
    }
}

export default SongList;