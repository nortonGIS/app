from django.contrib.gis.db import models


class Fires(models.Model):
    fid = models.AutoField(primary_key=True)
    name = models.TextField(blank=False, null=False)
    starttime = models.TextField(blank=False, null=False)
    endtime = models.TextField(blank=False, null=False)

    def serialize(self):
        return {
            "fid": self.fid,
            "name": self.name,
            "starttime": self.starttime,
            "endtime": self.endtime,
        }


class Fireperimeters(models.Model):
    uid = models.AutoField(primary_key=True)
    fid = models.IntegerField()
    time = models.TextField(blank=False, null=False)
    # lat = models.FloatField(default=0)
    # lng = models.FloatField(default=0)
    geom = models.PolygonField(srid=4326)

    def serialize(self):
        return {
            "uid": self.uid,
            "fid": self.fid,
            "time": self.time,
            "geom": self.geom,
        }
