import React, { Component } from 'react';
import Form from './Form';
import './App.css';

class App extends Component {
  state = {
    api_url: 'https://api-staging.stasher.com/v1/stashpoints',
    api_url_filtered: '',
    stashpoints: [],
    assoc_id: '',
    active: '',
    twentyfour_seven: '',
    open_late: '',
    featured: '',
    type: '',
    city: '',
    nearby_radius: '',
    min_capacity: '',
    by_distance: '',
    by_capacity: '',
    by_bags_last_30_days: '',
  };

  componentDidMount() {
    fetch(this.state.api_url, {
      method: 'GET',
    })
      .then(res => res.json())
      .then(stashpoints =>
        this.setState({ stashpoints }).catch(err => {
          console.log(err);
        })
      );
  }

  handleChange = e => {
    switch (e.target.type) {
      case 'checkbox':
        this.setState({ [e.target.name]: e.target.checked });
        break;
      default:
        this.setState({ [e.target.name]: e.target.value });
        break;
    }
  };

  createQuery = e => {
    e.preventDefault();
    let filters = this.state.api_url + '?centre_lat=51.4831763&centre_lon=-0.2702527&'; // This would normally be achieved via Geolocation.getCurrentPosition()

    if (this.state.assoc_id) {
      filters += `assoc_id=${this.state.assoc_id}&`;
    }
    if (this.state.active !== '') {
      filters += `active=${this.state.active}&`;
    }
    if (this.state.twentyfour_seven) {
      filters += `twentyfour_seven=${this.state.twentyfour_seven}&`;
    }
    if (this.state.open_late) {
      filters += `open_late=${this.state.open_late}&`;
    }
    if (this.state.featured) {
      filters += `featured=${this.state.featured}&`;
    }
    if (this.state.type) {
      filters += `type=${this.state.type}&`;
    }
    if (this.state.city) {
      filters += `city=${this.state.city}&`;
    }
    if (this.state.nearby_radius) {
      filters += `nearby_radius=${this.state.nearby_radius}&`;
    }
    if (this.state.min_capacity) {
      filters += `min_capacity=${this.state.min_capacity}&`;
    }

    if (this.state.by_distance) {
      filters += `by_distance=${this.state.by_distance}`;
    } else if (this.state.by_capacity) {
      filters += `by_capacity=${this.state.by_capacity}`;
    } else if (this.state.by_bags_last_30_days) {
      filters += `by_bags_last_30_days=${this.state.by_bags_last_30_days}`;
    }
    console.log(filters);

    this.setState({ api_url_filtered: filters });

    fetch(filters, {
      method: 'GET',
    })
      .then(res => res.json())
      .then(stashpoints =>
        this.setState({ stashpoints }).catch(err => {
          console.log(err);
        })
      );
  };

  render() {
    return (
      <div className="App">
        <h1>Stashpoints</h1>
        <Form handleChange={this.handleChange} createQuery={this.createQuery} />
        {this.state.stashpoints.map(stashpoint => (
          <div key={stashpoint.id}>
            {stashpoint.id} - {stashpoint.name} - {stashpoint.address}
          </div>
        ))}
      </div>
    );
  }
}

export default App;
