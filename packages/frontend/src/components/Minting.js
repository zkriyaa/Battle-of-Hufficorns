import React from "react";
import Grid from "@material-ui/core/Grid";
import NFTForm from "../NFTForm";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  control: {
    padding: theme.spacing(2),
  },
}));

export class NFT {
  constructor(tokenID, name, imageUri, description, xp, speed, power,hashValue) {
    this.tokenID = tokenID;
    this.name = name;
    this.imageUri = imageUri;
    this.description = description;
    this.xp = xp;
    this.speed = speed;
    this.power = power;
    this.hashValue = hashValue;
  }
}

const nft = new NFT(
  "1",
  "Best Character I",
  "Mint your NFT and get your superpowers"
);

const Minting = () => {
  const [spacing] = React.useState(2);
  const classes = useStyles();
  var arr = [];
  arr.push(nft);
  return (
    <div>
      <h3 className="headline">Mint your favorite character</h3>
      <Grid container className={classes.root} spacing={8}>
        <Grid item xs={12}>
          <Grid container justify="center" spacing={spacing}>
            <Grid>
              <NFTForm data={nft} />
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
};
export default Minting;