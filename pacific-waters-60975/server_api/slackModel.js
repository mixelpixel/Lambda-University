
const slackModel = (sb) => {
  this.token = sb.token,
  this.team_id = sb.team_id,
  this.team_domain = sb.team_domain,
  this.channel_id = sb.channel_id,
  this.channel_name = sb.channel_name,
  this.user_id = sb.user_id,
  this.user_name = sb.user_name,
  this.command = sb.command,
  this.text = sb.text,
  this.response_url = sb.response_url,
  this.response_type = "in_channel"
};

module.exports = slackModel;
