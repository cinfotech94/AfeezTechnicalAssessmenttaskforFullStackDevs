using Newtonsoft.Json;

public class AppSettings
{
    public string apiKey { get; set; }
    public string Id { get; set; }
    public string logFilePath { get; set; }
    public string OmdbBaseURL { get; set; }
}

public class Logging
{
    public LogLevel LogLevel { get; set; }
}

public class LogLevel
{
    public string Default { get; set; }

    [JsonProperty("Microsoft.AspNetCore")]
    public string MicrosoftAspNetCore { get; set; }
}

public class Root
{
    public Logging Logging { get; set; }
    public string AllowedHosts { get; set; }
    public AppSettings AppSettings { get; set; }
}

