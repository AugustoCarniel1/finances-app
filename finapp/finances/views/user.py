from rest_framework.decorators import APIView
from rest_framework.response import Response

import BO.user.user

import json

class UserView(APIView):
    def get(self, *args, **kwargs):
        pass

    def post(self, *args, **kwargs):
        user_info = json.loads(self.request.body)
        response = BO.user.user.User().create_user(user_info=user_info)
        return Response(response)