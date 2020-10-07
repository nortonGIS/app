from django.http import JsonResponse, HttpResponse, Http404
from django.utils.http import is_safe_url
from django.shortcuts import render, redirect
from .models import Fires, Fireperimeters
from django.core.serializers import serialize
from django.contrib.gis.geos import GEOSGeometry


def fires_list(request, *args, **kwargs):
    data = {}
    status = 200
    try:

        data["fires"] = serialize('json', Fires.objects.all(), fields=(
            "fid", "name", "starttime", "endtime"))
        # fires_lst = Fires.objects.all()
        # data["fires"] = [x.serialize() for x in fires_lst]
    except:
        data['message'] = "Not Found"
        status = 404

    return JsonResponse(data, status=status)


def fireperimeters_list(request, fid, *args, **kwargs):
    data = {
        "fid": fid}
    status = 200

    try:
        data["fires"] = serialize('json', Fires.objects.all(), fields=(
            "name", "starttime", "endtime"))
        data["times"] = sorted(
            [x.time for x in Fireperimeters.objects.filter(fid=fid)])

        data["fireperimeters"] = serialize('geojson', Fireperimeters.objects.all().order_by('time'),
                                           geometry_field='geom',
                                           fields=("uid", "fid", "time"))

        # data["parcels"] = serialize('geojson', Parcel.objects.all(),
        #                             geometry_field='geom',
        #                             fields=("pid", "ain"))

        # data["buildings"] = serialize('geojson', Building.objects.all(),
        #                               geometry_field='geom',
        #                               fields=("bid", "ain"))

    except:
        data['message'] = "Not Found"
        status = 404
    return JsonResponse(data, status=status)


# def fireTOA_list(request, fid, coords, *args, **kwargs):
#     data = {
#         "fid": fid}
#     status = 200

#     try:

#         # pnt = GEOSGeometry('Point(-118.79033696436792 34.057012231757945)')
#         pnt = GEOSGeometry('Point('+coords+')')
#         intersect = sorted(
#             [x.time for x in Fireperimeters.objects.filter(geom__contains=pnt).order_by('time')])
#         if len(intersect) > 0:
#             data["intersect"] = intersect[0]
#         else:
#             data["intersect"] = 0

#     except:
#         data['message'] = "Not Found"
#         status = 404
#     return JsonResponse(data, status=status)
