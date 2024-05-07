using AfeezTechnicalAssessmenttaskforFullStackDevs.pdf.Server.Cache.Repository.Interface;
using AfeezTechnicalAssessmenttaskforFullStackDevs.pdf.Server.Models.Request;
using AfeezTechnicalAssessmenttaskforFullStackDevs.pdf.Server.Models.Responses;
using AfeezTechnicalAssessmenttaskforFullStackDevs.pdf.Server.Services.Interfaces;
using Microsoft.AspNetCore.Mvc;
using System.Threading.Tasks;

namespace AfeezTechnicalAssessmenttaskforFullStackDevs.pdf.Server.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class TechnicalAssesmentController : ControllerBase
    {
        private readonly IAssesssmentService _assesssmentService;
        private readonly IomdbapiService _iomdbapiService;
        private readonly ICacheService _cacheService;

        public TechnicalAssesmentController(IAssesssmentService assesssmentService, IomdbapiService iomdbapiService, ICacheService cacheService)
        {
            _assesssmentService = assesssmentService;
            _iomdbapiService = iomdbapiService;
            _cacheService = cacheService;
        }

        [HttpGet("GetMusicMovieSeries")]
        public async Task<IActionResult> GetMDBapi([FromQuery] GetMDBapi getMDBapi)
        {
            string cacheKey = "";
            if (getMDBapi.Title == null)
            {
                cacheKey = "getMDBapi" + getMDBapi.ImdbId;
            }
            if (getMDBapi.ImdbId == null)
            {
                cacheKey = "getMDBapi"+getMDBapi.Title;
            }
            OmdbGetsDataRoot cachedResult = await _cacheService.GetAsync<OmdbGetsDataRoot>(cacheKey);
            if (cachedResult != null)
            {
                return Ok(cachedResult);
            }
            string urlAppend = _assesssmentService.ConvertGetDataToLink(getMDBapi);
            OmdbGetsDataRoot omdbGetsDataRoot = await _iomdbapiService.GetMovieDetails(urlAppend);
            if(omdbGetsDataRoot.Title != null)
            {
                await _cacheService.SetAsync(cacheKey, omdbGetsDataRoot);
            }
            return Ok(omdbGetsDataRoot);
        }

        [HttpGet("SearchMusicMovieSeries")]
        public async Task<IActionResult> SearchMDBapi([FromQuery] SearchMDBapi searchMDBapi)
        {
                string cacheKey = "SearchMDBapi"+searchMDBapi.Title;
            OmdbSearchResultRoot cachedResult = await _cacheService.GetAsync<OmdbSearchResultRoot>(cacheKey);
            if (cachedResult!=null)
            { 
                if(cachedResult.Search.Count() > 0)
                {
                    return Ok(cachedResult);
                }
            }
            string urlAppend = _assesssmentService.ConvertSearchDataToLink(searchMDBapi);
            OmdbSearchResultRoot omdbSearchResultRoot = await _iomdbapiService.SearchMovie(urlAppend);
            if(omdbSearchResultRoot != null)
            {
                await _cacheService.SetAsync(cacheKey, omdbSearchResultRoot);
            }
            return Ok(omdbSearchResultRoot);
        }
    }
}
