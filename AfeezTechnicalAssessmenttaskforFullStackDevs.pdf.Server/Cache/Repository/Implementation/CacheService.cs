using System.Linq.Expressions;
using Microsoft.Extensions.Caching.Memory;
using AfeezTechnicalAssessmenttaskforFullStackDevs.pdf.Server.Cache.Repository.Interface;

namespace AfeezTechnicalAssessmenttaskforFullStackDevs.pdf.Server.Cache.Repository.Implementation
{
    public class CacheService : ICacheService
    {
        private readonly IMemoryCache _cache;

        public CacheService(IMemoryCache cache)
        {
            _cache = cache;
        }

        public async Task<T> GetOrCreateAsync<T>(string key, Func<Task<T>> factory, TimeSpan? absoluteExpiration = null)
        {
            if (_cache.TryGetValue(key, out T result))
            {
                return result;
            }

            result = await factory();
            if (result != null)
            {
                await SetAsync(key, result, absoluteExpiration);
            }
            return result;
        }

        public async Task<T> GetAsync<T>(string key)
        {
            return await Task.FromResult(_cache.Get<T>(key));
        }

        public async Task SetAsync<T>(string key, T value, TimeSpan? absoluteExpiration = null)
        {
            var options = new MemoryCacheEntryOptions();
            if (absoluteExpiration.HasValue)
            {
                options.AbsoluteExpirationRelativeToNow = absoluteExpiration;
            }

            await Task.FromResult(_cache.Set(key, value, options));
        }
    }
}
