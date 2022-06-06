import './ItemList.scss'
import Item from '../Item/Item'
import Grid from '@mui/material/Grid'

const ItemList = ({items}) => {
    return (
          <Grid container>
            {
              items.map( ( item, index) => {
                return(
                  <Grid item md={3} key={index}>
                    <Item item={item}/>
                  </Grid>
                )
              })
            }
          </Grid>
      );
};

export default ItemList;