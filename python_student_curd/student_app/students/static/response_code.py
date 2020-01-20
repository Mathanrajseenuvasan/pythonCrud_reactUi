def response_format(response):
    if response.get('message'):
        return response, 404
    return response, 200
