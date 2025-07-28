function solution(cacheSize, cities) {
    // 캐시 크기가 0이면 모든 요청이 cache miss
    if (cacheSize === 0) {
        return cities.length * 5;
    }
    
    let cache = [];
    let totalTime = 0;
    
    for (let city of cities) {
        // 대소문자 구분하지 않으므로 소문자로 변환
        const normalizedCity = city.toLowerCase();
        
        // 캐시에서 해당 도시찾기
        const index = cache.indexOf(normalizedCity);
        
        //캐시에 있을 경우
        if (index !== -1) {
            totalTime += 1;
            cache.splice(index, 1);
            cache.push(normalizedCity);
            
        // 캐시에 없는 경우
        } else {
            totalTime += 5;
            if (cache.length >= cacheSize) {
                cache.shift();
            }
            cache.push(normalizedCity);
        }
    }
    
    return totalTime;
}