from rest_framework.decorators import APIView
from rest_framework.response import Response


# Create your views here.

def test(request):
    return Response({'status': True})