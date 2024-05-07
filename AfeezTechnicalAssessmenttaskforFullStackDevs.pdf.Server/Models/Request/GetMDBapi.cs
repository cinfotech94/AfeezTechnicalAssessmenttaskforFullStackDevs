using AfeezTechnicalAssessmenttaskforFullStackDevs.pdf.Server.Models.Enums;
using System;
using System.ComponentModel.DataAnnotations;
using System.Diagnostics.CodeAnalysis;
using System.Text.Json.Serialization;

namespace AfeezTechnicalAssessmenttaskforFullStackDevs.pdf.Server.Models.Request
{
    public class GetMDBapi
    {
        public string? Title { get; set; }
        
        public string? ImdbId { get; set; }
        
        public string? Year { get; set; }

        [JsonConverter(typeof(JsonStringEnumConverter))]
        
        public GetType? Type { get; set; } = Enums.GetType.Option1;

        public string? dataType { get; set; }
        
        public string? callback { get; set; }
        
        public string? APIVersion { get; set; }

        [JsonConverter(typeof(JsonStringEnumConverter))]
        
        public GetPlot? shortfullplot { get; set; } = Enums.GetPlot.Option1;

        public GetMDBapi()
        {
         
        }

        public void Validate()
        {
            if (string.IsNullOrEmpty(ImdbId) && string.IsNullOrEmpty(Title))
            {
                throw new InvalidOperationException("At least one of Property Title or ImdbId must be set.");
            }
        }
    }
}
