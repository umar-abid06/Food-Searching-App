import axios from 'axios';

export default axios.create({
    baseURL:'https://api.yelp.com/v3/businesses',
    headers:{
        Authorization:'Bearer w1HYjtHWZefB9vwU-FI1dMqxrPluyFuZmIIRmyJzVs7eeIwF4E30q9C6e-A5yqll8I4QIN2RoGUhAOKlQe9dr3PFxitU2dkKlldprkAWQP0_BR8daO8UNolnnFJDYHYx'
    }
})