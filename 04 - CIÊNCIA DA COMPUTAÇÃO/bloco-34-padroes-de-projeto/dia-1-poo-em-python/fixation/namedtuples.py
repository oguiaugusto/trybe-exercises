from collections import namedtuple


GeoPoint = namedtuple("GeoPoint", "a b")
location = GeoPoint(-22.123456789, -47.987654321)

print(location.a)