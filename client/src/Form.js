import React from 'react';

const Form = props => (
  <div>
    <form onChange={props.handleChange} onSubmit={props.createQuery}>
      <div>
        <h3>Filtering</h3>
        <label htmlFor="assoc_id">Stashpoints Associated ID: </label>
        <input type="text" name="assoc_id" id="assoc_id" maxLength="12" />
      </div>
      <div>
        <label htmlFor="active">Active/Inactive Stashpoints: </label>
        <input type="radio" name="active" value="true" /> Active
        <input type="radio" name="active" value="false" /> Inactive
        <input type="radio" name="active" value="" defaultChecked /> All
      </div>
      <div>
        <label htmlFor="twentyfour_seven">24/7 Stashpoint: </label>
        <input type="checkbox" name="twentyfour_seven" id="twentyfour_seven" value="true" />
      </div>
      <div>
        <label htmlFor="open_late">Stashpoint Open Late: </label>
        <input type="checkbox" name="open_late" id="open_late" value="true" />
      </div>
      <div>
        <label htmlFor="featured">Featured Stashpoint: </label>
        <input type="checkbox" name="featured" id="featured" value="true" />
      </div>
      <div>
        <label htmlFor="type">Type Of Stashpoint: </label>
        <select id="type" name="type">
          <option value="">All</option>
          <option value="hotel">Hotel</option>
          <option value="newsagent">Newsagent</option>
          <option value="postal">Postal</option>
          <option value="cafe">Cafe</option>
          <option value="tourist_information_centre">Tourist Information Centre</option>
          <option value="internet_cafe">Internet Cafe</option>
          <option value="other">Other</option>
        </select>
      </div>
      <div>
        <label htmlFor="city">Stashpoint City: </label>
        <input type="text" name="city" id="city" maxLength="15" />
      </div>
      <div>
        <label htmlFor="nearby_radius">Nearby Stashpoints (km): </label>
        <input type="number" name="nearby_radius" id="nearby_radius" min="0" step="0.1" />
      </div>
      <div>
        <label htmlFor="min_capacity">Bag Capacity Of Stashpoint: </label>
        <input type="number" name="min_capacity" id="min_capacity" min="1" step="1" />
      </div>
      <div>
        <h3>Sorting (Only one can be used at a time)</h3>
        <label htmlFor="by_distance">Sort By Distance: </label>
        <input type="radio" name="by_distance" value="asc" /> Ascending
        <input type="radio" name="by_distance" value="desc" /> Descending
        <input type="radio" name="by_distance" value="" defaultChecked /> None
      </div>
      <div>
        <label htmlFor="by_capacity">Sort By Bag Capacity: </label>
        <input type="radio" name="by_capacity" value="asc" /> Ascending
        <input type="radio" name="by_capacity" value="desc" /> Descending
        <input type="radio" name="by_capacity" value="" defaultChecked /> None
      </div>
      <div>
        <label htmlFor="by_bags_last_30_days">Sort By Bags Stored Last 30 Days: </label>
        <input type="radio" name="by_bags_last_30_days" value="asc" /> Ascending
        <input type="radio" name="by_bags_last_30_days" value="desc" /> Descending
        <input type="radio" name="by_bags_last_30_days" value="" defaultChecked /> None
      </div>
      <div>
        <input type="submit" value="Filter!" />
      </div>
    </form>
    <br />
    <br />
  </div>
);

export default Form;
