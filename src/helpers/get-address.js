export async function getAddress(ip = '8.8.8.8') {
    const response = await fetch(`https://geo.ipify.org/api/v2/country,city?apiKey=at_BPM9JNZUgZ0cEpp4d31vvJzp6xt9R&ipAddress=${ip}`)
    
    return await response.json();

}