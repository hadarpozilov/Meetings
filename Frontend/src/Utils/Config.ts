class Config {
    public GroupUrl = "";
    public meetingByGroupUrl = "";
    public MeetingUrl = "";
}

class DevelopmentConfig extends Config {
    public GroupUrl = "http://localhost:3002/api/developer/groups";
    public meetingByGroupUrl = " http://localhost:3002/api/meeting-by-group/";
    public MeetingUrl = " http://localhost:3002/api/meeting";
}

class ProductionConfig extends Config {
    public GroupUrl = "http://localhost:3002/api/developer/groups";
    public meetingByGroupUrl = " http://localhost:3002/api/meeting-by-group/";
    public MeetingUrl = " http://localhost:3002/api/meeting";
}

const config = process.env.NODE_ENV === "development" ? new DevelopmentConfig() : new ProductionConfig();

export default config;
