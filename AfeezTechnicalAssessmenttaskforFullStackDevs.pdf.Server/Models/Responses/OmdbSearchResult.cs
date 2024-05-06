
namespace AfeezTechnicalAssessmenttaskforFullStackDevs.pdf.Server.Models.Responses
{

        // Root myDeserializedClass = JsonConvert.DeserializeObject<Root>(myJsonResponse);
        public class OmdbSearchResultRoot
        {
            public List<OmdbSearchResultSearch> Search { get; set; }
            public string totalResults { get; set; }
            public string Response { get; set; }
        }

        public class OmdbSearchResultSearch
        {
            public string Title { get; set; }
            public string Year { get; set; }
            public string imdbID { get; set; }
            public string Type { get; set; }
            public string Poster { get; set; }
        }



    
}
