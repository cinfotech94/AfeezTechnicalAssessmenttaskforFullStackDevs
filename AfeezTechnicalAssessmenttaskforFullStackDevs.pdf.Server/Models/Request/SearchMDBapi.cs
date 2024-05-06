using AfeezTechnicalAssessmenttaskforFullStackDevs.pdf.Server.Models.Enums;
using System.ComponentModel.DataAnnotations;
using System.Text.Json.Serialization;

namespace AfeezTechnicalAssessmenttaskforFullStackDevs.pdf.Server.Models.Request
{
    public class SearchMDBapi
    {

        [Key]
        [Required]
        public string Title { get; set; }
        public string? Year { get; set; }
        [JsonConverter(typeof(JsonStringEnumConverter))]
        public GetType? Type { get; set; } = Enums.GetType.movie;
        public string? DataType { get; set; }
        private int? _Page;
            public string? Page
        {
            get => _Page.ToString();
            set => _Page = (int.TryParse(value, out int intValue) && intValue >= 1 && intValue <= 100) ? intValue : 1;
        }
        public string? APIVersion { get; set; }
        public string? Callback { get; set; }

    }
}
