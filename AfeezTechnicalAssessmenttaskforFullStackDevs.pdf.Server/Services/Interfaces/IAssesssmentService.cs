using AfeezTechnicalAssessmenttaskforFullStackDevs.pdf.Server.Models.Request;

namespace AfeezTechnicalAssessmenttaskforFullStackDevs.pdf.Server.Services.Interfaces
{
    public interface IAssesssmentService
    {
        string ConvertSearchDataToLink(SearchMDBapi request);
        string ConvertGetDataToLink(GetMDBapi request);
    }
}
