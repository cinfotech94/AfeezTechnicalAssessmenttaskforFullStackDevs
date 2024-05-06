using System.Linq.Expressions;

namespace AfeezTechnicalAssessmenttaskforFullStackDevs.pdf.Server.Cache.Repository.Interface
{

        public interface ICacheService
        {
        Task<T> GetOrCreateAsync<T>(string key, Func<Task<T>> factory, TimeSpan? absoluteExpiration = null);
        Task<T> GetAsync<T>(string key);
        Task SetAsync<T>(string key, T value, TimeSpan? absoluteExpiration = null);
    }

}
