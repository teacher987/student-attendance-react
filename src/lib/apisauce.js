import apisauce from 'apisauce';

export default baseUrl => {
    const apiInstance = apisauce.create({
        baseUrl: baseUrl,
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
        }
    });

    return apiInstance;
}