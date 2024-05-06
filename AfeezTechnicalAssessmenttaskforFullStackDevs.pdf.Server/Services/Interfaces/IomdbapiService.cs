using AfeezTechnicalAssessmenttaskforFullStackDevs.pdf.Server.Models.Responses;

namespace AfeezTechnicalAssessmenttaskforFullStackDevs.pdf.Server.Services.Interfaces
{
    public interface IomdbapiService
    {
        Task<OmdbSearchResultRoot> SearchMovie(string title);
        Task<OmdbGetsDataRoot> GetMovieDetails(string imdbId);
    }
}
