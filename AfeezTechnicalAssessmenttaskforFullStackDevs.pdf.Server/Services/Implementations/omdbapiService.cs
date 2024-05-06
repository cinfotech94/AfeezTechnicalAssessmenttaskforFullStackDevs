using AfeezTechnicalAssessmenttaskforFullStackDevs.pdf.Server.LoggingFiles.LoggingService;
using AfeezTechnicalAssessmenttaskforFullStackDevs.pdf.Server.Models.LoggingModel;
using AfeezTechnicalAssessmenttaskforFullStackDevs.pdf.Server.Models.Responses;
using AfeezTechnicalAssessmenttaskforFullStackDevs.pdf.Server.Services.Interfaces;
using Microsoft.Extensions.Configuration;
using System;
using System.Net.Http;
using System.Text.Json;
using System.Threading.Tasks;

namespace AfeezTechnicalAssessmenttaskforFullStackDevs.pdf.Server.Services.Implementations
{
    public class omdbapiService : IomdbapiService
    {
        private readonly string _apiKey;
        private readonly string _user;
        private readonly string _omdbBaseURL;
        private readonly ILoggingService _loggingService;
        private readonly IConfiguration _configuration;

        public omdbapiService(IConfiguration configuration, ILoggingService loggingService)
        {
            _configuration = configuration;
            _apiKey = _configuration["AppSettings:apiKey"];
            _omdbBaseURL = _configuration["AppSettings:OmdbBaseURL"];
            _user = _configuration["AppSettings:Id"];
            _loggingService = loggingService;
        }
        public async Task<OmdbSearchResultRoot> SearchMovie(string SearchMovieString)
        {
            string baseUrl = _omdbBaseURL+"?i="+_user+"&apikey="+_apiKey + "&" + SearchMovieString;
            OmdbSearchResultRoot finalResponse = new();
            using (HttpClient client = new HttpClient())
            {
                try
                {
                    HttpResponseMessage response = await client.GetAsync(baseUrl);
                    if (response.IsSuccessStatusCode)
                    {
                        string responseBody = await response.Content.ReadAsStringAsync();
                        if (!string.IsNullOrEmpty(responseBody))
                        {
                            var options = new JsonSerializerOptions
                            {
                                PropertyNameCaseInsensitive = true
                            };
                            finalResponse = JsonSerializer.Deserialize<OmdbSearchResultRoot>(responseBody, options);
                            return finalResponse;
                        }
                    }
                    return finalResponse;
                }
                catch (HttpRequestException e)
                {
                    LoggingModel loggingModel = new LoggingModel()
                    {
                        ErrorMessage = e.Message,
                        ServiceName = "omdbapiServices",
                        LogId = Guid.NewGuid(),
                        LogTime = DateTime.Now
                    };
                    _loggingService.LogError(loggingModel);
                }
                return finalResponse;
            }
        }

        public async Task<OmdbGetsDataRoot> GetMovieDetails(string GetMovieString)
        { 

            string baseUrl = _omdbBaseURL + "?i=" + _user + "&apikey=" + _apiKey+"&"+ GetMovieString;
            OmdbGetsDataRoot finalResponse = new();
            using (HttpClient client = new HttpClient())
            {
                try
                {
                    HttpResponseMessage response = await client.GetAsync(baseUrl);
                    if (response.IsSuccessStatusCode)
                    {
                        string responseBody = await response.Content.ReadAsStringAsync();
                        if (!string.IsNullOrEmpty(responseBody))
                        {
                            var options = new JsonSerializerOptions
                            {
                                PropertyNameCaseInsensitive = true
                            };
                            finalResponse = JsonSerializer.Deserialize<OmdbGetsDataRoot>(responseBody, options);
                            return finalResponse;
                        }
                    }
                    return finalResponse;
                }
                catch (HttpRequestException e)
                {
                    LoggingModel loggingModel = new LoggingModel()
                    {
                        ErrorMessage = e.Message,
                        ServiceName = "omdbapiServices",
                        LogId = Guid.NewGuid(),
                        LogTime = DateTime.Now
                    };
                    _loggingService.LogError(loggingModel);
                }
                return finalResponse;
            }
        }
    }
}
