import React, {Component} from 'react';
const timezones = ['PST', 'MST', 'MDT', 'EST', 'UTC']

class TimeForm extends Component {
  constructor(props) {
    super(props);

    this._handleChange = this._handleChange.bind(this)
    this._changeTimezone = this._changeTimezone.bind(this);
    this._changeMsg = this._changeMsg.bind(this);
    this._handleFormSubmit = this._handleFormSubmit.bind(this);

    const {tz, msg} = this.props;
    this.state = {tz, msg}
  }

  _handleChange(e) {
    typeof this.props.onFormChange === 'function' &&
    this.props.onFormChange(this.state);
  }

  _changeTimezone(e) {
    const tz = e.target.value;
    this.setState({tz}, this._handleChange);
  }

  _changeMsg(e) {
    const msg = encodeURIComponent(e.target.value).replace(/%20/, '+');
    this.setState({msg}, this._handleChange);
  }

  _handleFormSubmit(e) {
    e.preventDefault();
    typeof this.props.onFormSubmit === 'function' && this.props.onFormSubmit(this.state);
  }

  render() {
    const {tz} = this.state

    return (
      <form onSubmit={this._handleFormSubmit}>
        <select
          onChange={this._changeTimezone}
          defaultValue={tz}>
          {timezones.map(t=> {
            return (<option key={t} value={t}>{t}</option>)
          })}
        </select>
        <input
          type="text"
          placeholder="A chronic string message (such as 7 hours from now)"
          onChange={this._changeMsg}
        />
        <input
          type="submit"
          value="Update request"
        />
      </form>
    )
  }
}

export default TimeForm;
