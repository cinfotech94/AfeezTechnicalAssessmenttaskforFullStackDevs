using AfeezTechnicalAssessmenttaskforFullStackDevs.pdf.Server.Models.Request;
using AfeezTechnicalAssessmenttaskforFullStackDevs.pdf.Server.Services.Interfaces;

namespace AfeezTechnicalAssessmenttaskforFullStackDevs.pdf.Server.Services.Implementations
{
    public class AssesssmentService : IAssesssmentService
    {

        public string ConvertGetDataToLink(GetMDBapi request)
        {
            string Response = "";
            if(request.Title==null && request.ImdbId==null)
            {
                return "Bad Request";
            }
            else
            {
                if(!string.IsNullOrEmpty(request.Title))
                {
                    string t = request.Title;
                    Response = Response+ "t=" + t;
                }
                if (!string.IsNullOrEmpty(request.ImdbId))
                {
                    string i = request.ImdbId;
                    Response = Response + "&i=" + i;
                }
                if (request.Type.ToString()!= "Option1")
                {
                    string type = request.Type.ToString();
                    Response = Response + "&type=" + type;
                }
                if (!string.IsNullOrEmpty(request.Year))
                {
                    string y = request.Year;
                    Response = Response + "&y=" + y;
                }
                if (request.shortfullplot.ToString() != "Option1")
                {
                    string plot = request.shortfullplot.ToString();
                    Response = Response + "&plot=" + plot;
                }
                string r = "json";
                string v = "1";
                Response = Response + "&r=" + r + "&v=" + v;
                return Response;
            }

        }

        public string ConvertSearchDataToLink(SearchMDBapi request)
        {
            string Response = "";
            string s = request.Title;
            if (!string.IsNullOrEmpty(request.Title))
            {
                string title = request.Title;
                Response = Response + "&s=" + title;
            }
            if (request.Type.ToString() != "Option1")
            {
                string type = request.Type.ToString();
                Response = Response + "&type=" + type;
            }
            if (!string.IsNullOrEmpty(request.Year))
            {
                string y = request.Year.ToString();
                Response = Response + "&y=" + y;
            }

            string r = "json";
            Response = Response + "&r=" + r;

            if (!string.IsNullOrEmpty(request.Page))
            {
                string page = request.Page;
                Response = Response + "&page=" + page;
            }
            string v = "1";
            Response = Response + "&v=" + v;
            return Response;

        }
    }
}
